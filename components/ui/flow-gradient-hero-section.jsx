"use client";
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

class TouchTexture {
  size = 64; width = 64; height = 64; maxAge = 64; radius = 0.1; speed = 1/64;
  trail = []; last = null;

  constructor() {
    this.canvas = document.createElement("canvas");
    this.canvas.width = this.width; this.canvas.height = this.height;
    this.ctx = this.canvas.getContext("2d");
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.texture = new THREE.Texture(this.canvas);
  }
  update() {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    for (let i = this.trail.length - 1; i >= 0; i--) {
      const p = this.trail[i];
      const f = p.force * this.speed * (1 - p.age / this.maxAge);
      p.x += p.vx * f; p.y += p.vy * f; p.age++;
      if (p.age > this.maxAge) this.trail.splice(i, 1);
      else this.drawPoint(p);
    }
    this.texture.needsUpdate = true;
  }
  addTouch(point) {
    let force = 0, vx = 0, vy = 0;
    if (this.last) {
      const dx = point.x - this.last.x, dy = point.y - this.last.y;
      if (dx === 0 && dy === 0) return;
      const d = Math.sqrt(dx*dx + dy*dy);
      vx = dx/d; vy = dy/d;
      force = Math.min((dx*dx + dy*dy) * 20000, 2.0);
    }
    this.last = { x: point.x, y: point.y };
    this.trail.push({ x: point.x, y: point.y, age: 0, force, vx, vy });
  }
  drawPoint(p) {
    const pos = { x: p.x * this.width, y: (1 - p.y) * this.height };
    let intensity = p.age < this.maxAge * 0.3 
      ? Math.sin((p.age / (this.maxAge * 0.3)) * (Math.PI / 2))
      : -((1 - (p.age - this.maxAge * 0.3) / (this.maxAge * 0.7)) * ((1 - (p.age - this.maxAge * 0.3) / (this.maxAge * 0.7)) - 2));
    intensity *= p.force;
    const color = `${((p.vx + 1) / 2) * 255}, ${((p.vy + 1) / 2) * 255}, ${intensity * 255}`;
    const radius = this.radius * this.width;
    this.ctx.shadowOffsetX = this.size * 5;
    this.ctx.shadowOffsetY = this.size * 5;
    this.ctx.shadowBlur = radius;
    this.ctx.shadowColor = `rgba(${color},${0.2 * intensity})`;
    this.ctx.beginPath();
    this.ctx.fillStyle = "rgba(255,0,0,1)";
    this.ctx.arc(pos.x - this.size * 5, pos.y - this.size * 5, radius, 0, Math.PI * 2);
    this.ctx.fill();
  }
}

class GradientBackground {
  mesh = null; isPaused = false;

  constructor(sceneManager) {
    this.sceneManager = sceneManager;
    this.uniforms = {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      uColor1: { value: new THREE.Vector3(0.831, 0.376, 0.039) }, // Sivnco Amber #D4600A
      uColor2: { value: new THREE.Vector3(0.09, 0.06, 0.04) },    // Deep obsidian amber
      uColor3: { value: new THREE.Vector3(0.910, 0.522, 0.165) }, // Honey amber
      uColor4: { value: new THREE.Vector3(0.55, 0.20, 0.03) },    // Burnt terracotta
      uColor5: { value: new THREE.Vector3(0.80, 0.42, 0.08) },    // Warm ochre
      uColor6: { value: new THREE.Vector3(0.06, 0.09, 0.07) },    // Forest obsidian undertone
      uSpeed: { value: 0.5 },
      uIntensity: { value: 0.85 },
      uTouchTexture: { value: null },
      uGrainIntensity: { value: 0.035 },
      uDarkNavy: { value: new THREE.Vector3(0.039, 0.035, 0.024) }, // Sivnco Obsidian #0A0906
      uGradientSize: { value: 0.55 },
      uColor1Weight: { value: 0.6 },
      uColor2Weight: { value: 0.4 }
    };
  }
  init() {
    const viewSize = this.sceneManager.getViewSize();
    const geometry = new THREE.PlaneGeometry(viewSize.width, viewSize.height, 1, 1);
    const material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: `varying vec2 vUv; void main() { gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); vUv = uv; }`,
      fragmentShader: `
        uniform float uTime, uSpeed, uIntensity, uGrainIntensity, uGradientSize;
        uniform vec2 uResolution;
        uniform vec3 uColor1, uColor2, uColor3, uColor4, uColor5, uColor6, uDarkNavy;
        uniform sampler2D uTouchTexture;
        varying vec2 vUv;
        
        float grain(vec2 uv, float t) {
          return fract(sin(dot(uv * uResolution * 0.5 + t, vec2(12.9898, 78.233))) * 43758.5453) * 2.0 - 1.0;
        }
        
        vec3 getGradientColor(vec2 uv, float time) {
          vec2 c1 = vec2(0.35 + sin(time * uSpeed * 0.3) * 0.28, 0.5 + cos(time * uSpeed * 0.38) * 0.32);
          vec2 c2 = vec2(0.72 + cos(time * uSpeed * 0.42) * 0.24, 0.42 + sin(time * uSpeed * 0.32) * 0.28);
          vec2 c3 = vec2(0.5 + sin(time * uSpeed * 0.22) * 0.32, 0.65 + cos(time * uSpeed * 0.36) * 0.26);
          vec2 c4 = vec2(0.22 + cos(time * uSpeed * 0.32) * 0.26, 0.3 + sin(time * uSpeed * 0.28) * 0.24);
          
          float i1 = 1.0 - smoothstep(0.0, uGradientSize * 1.5, length(uv - c1));
          float i2 = 1.0 - smoothstep(0.0, uGradientSize * 1.35, length(uv - c2));
          float i3 = 1.0 - smoothstep(0.0, uGradientSize * 1.55, length(uv - c3));
          float i4 = 1.0 - smoothstep(0.0, uGradientSize * 1.25, length(uv - c4));
          
          vec3 bg = uDarkNavy; // #0A0906
          vec3 glow = vec3(0.0);
          glow += uColor1 * i1 * (0.6 + 0.3 * sin(time * uSpeed * 0.9));
          glow += uColor3 * i2 * (0.5 + 0.3 * cos(time * uSpeed * 1.1));
          glow += uColor5 * i3 * 0.45;
          glow += uColor4 * i4 * 0.35;
          
          // Filmic soft tonemapping — prevents harsh white blown-out clipping
          glow = glow / (glow + vec3(1.0));
          vec3 color = mix(bg, glow * 2.2, uIntensity);
          
          // Edge vignette to ensure high text contrast and deep atmospheric depth
          float edgeDist = length(uv - vec2(0.5));
          float vignette = smoothstep(0.9, 0.15, edgeDist);
          color = mix(bg, color, vignette);
          
          return clamp(color, vec3(0.0), vec3(1.0));
        }
        
        void main() {
          vec2 uv = vUv;
          vec4 touchTex = texture2D(uTouchTexture, uv);
          uv.x -= (touchTex.r * 2.0 - 1.0) * 0.4 * touchTex.b;
          uv.y -= (touchTex.g * 2.0 - 1.0) * 0.4 * touchTex.b;
          vec2 center = vec2(0.5);
          float dist = length(uv - center);
          float ripple = sin(dist * 18.0 - uTime * 2.5) * 0.02 * touchTex.b;
          uv += vec2(ripple);
          
          vec3 color = getGradientColor(uv, uTime);
          color += grain(uv, uTime) * uGrainIntensity;
          gl_FragColor = vec4(clamp(color, vec3(0.0), vec3(1.0)), 1.0);
        }
      `
    });
    this.mesh = new THREE.Mesh(geometry, material);
    this.sceneManager.scene.add(this.mesh);
  }
  update(delta) { if (!this.isPaused) this.uniforms.uTime.value += delta; }
  onResize(w, h) {
    const viewSize = this.sceneManager.getViewSize();
    if (this.mesh) { this.mesh.geometry.dispose(); this.mesh.geometry = new THREE.PlaneGeometry(viewSize.width, viewSize.height, 1, 1); }
    this.uniforms.uResolution.value.set(w, h);
  }
}

class ParticleDust {
  constructor(scene) {
    this.count = 40;
    const positions = new Float32Array(this.count * 3);
    this.velocities = [];

    for (let i = 0; i < this.count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 2] = Math.random() * 25 + 5;
      this.velocities.push({
        x: (Math.random() - 0.5) * 0.04,
        y: Math.random() * 0.04 + 0.015,
        sway: Math.random() * Math.PI * 2
      });
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Circular luminous particle sprite
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(255, 235, 200, 0.95)');
    grad.addColorStop(0.3, 'rgba(212, 96, 10, 0.65)');
    grad.addColorStop(0.8, 'rgba(212, 96, 10, 0.15)');
    grad.addColorStop(1, 'rgba(212, 96, 10, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 32, 32);
    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 1.2,
      map: texture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.55
    });

    this.points = new THREE.Points(geometry, material);
    scene.add(this.points);
  }

  update(delta, time) {
    const pos = this.points.geometry.attributes.position.array;
    for (let i = 0; i < this.count; i++) {
      pos[i * 3 + 1] += this.velocities[i].y * delta * 40;
      pos[i * 3] += Math.sin(time * 0.4 + this.velocities[i].sway) * 0.02;

      // Wrap around gracefully
      if (pos[i * 3 + 1] > 22) {
        pos[i * 3 + 1] = -22;
        pos[i * 3] = (Math.random() - 0.5) * 60;
      }
    }
    this.points.geometry.attributes.position.needsUpdate = true;
  }
}

class ThreeApp {
  animationId = null;

  constructor(container) {
    this.container = container;
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(this.renderer.domElement);
    this.camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 10000);
    this.camera.position.z = 50;
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0a0906);
    this.clock = new THREE.Clock();
    this.touchTexture = new TouchTexture();
    this.gradientBackground = new GradientBackground(this);
    this.gradientBackground.uniforms.uTouchTexture.value = this.touchTexture.texture;
    this.particleDust = new ParticleDust(this.scene);
    this.init();
  }
  getViewSize() {
    const fov = (this.camera.fov * Math.PI) / 180;
    const height = Math.abs(this.camera.position.z * Math.tan(fov / 2) * 2);
    return { width: height * this.camera.aspect, height };
  }
  init() {
    this.gradientBackground.init();
    const c = this.container;
    const onMove = (x, y) => { this.touchTexture.addTouch({ x: x / c.clientWidth, y: 1 - y / c.clientHeight }); };
    // Listen on the hero section (parent) so pointer-events work through the canvas
    const hero = c.parentElement;
    if (hero) {
      hero.addEventListener("mousemove", (e) => {
        const rect = c.getBoundingClientRect();
        onMove(e.clientX - rect.left, e.clientY - rect.top);
      }, { passive: true });
      hero.addEventListener("touchmove", (e) => {
        if (!e.touches || !e.touches[0]) return;
        const rect = c.getBoundingClientRect();
        onMove(e.touches[0].clientX - rect.left, e.touches[0].clientY - rect.top);
      }, { passive: true });
    }
    this._resizeHandler = () => {
      this.camera.aspect = c.clientWidth / c.clientHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(c.clientWidth, c.clientHeight);
      this.gradientBackground.onResize(c.clientWidth, c.clientHeight);
    };
    window.addEventListener("resize", this._resizeHandler);
    this.tick();
  }
  tick() {
    const delta = Math.min(this.clock.getDelta(), 0.1);
    this.touchTexture.update();
    this.gradientBackground.update(delta);
    if (this.particleDust) this.particleDust.update(delta, this.clock.getElapsedTime());
    this.renderer.render(this.scene, this.camera);
    this.animationId = requestAnimationFrame(() => this.tick());
  }
  cleanup() {
    if (this.animationId) cancelAnimationFrame(this.animationId);
    if (this._resizeHandler) window.removeEventListener("resize", this._resizeHandler);
    this.renderer.dispose();
    if (this.container && this.renderer.domElement && this.container.contains(this.renderer.domElement)) {
      this.container.removeChild(this.renderer.domElement);
    }
  }
}

/**
 * FlowGradientHero — Injects a WebGL liquid gradient canvas directly into
 * the #hero section element so it renders inside the hero's stacking context
 * (avoiding the opaque .main-wrap background that covers fixed elements).
 */
export default function FlowGradientHero() {
  const appRef = useRef(null);

  useEffect(() => {
    // Find the hero section rendered from index.html
    const heroSection = document.getElementById('hero');
    if (!heroSection) return;

    // Create a wrapper div inside the hero for the WebGL canvas
    const wrapper = document.createElement('div');
    wrapper.setAttribute('aria-hidden', 'true');
    wrapper.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;pointer-events:none;overflow:hidden;';
    // Insert as the first child so it renders behind hero content
    heroSection.insertBefore(wrapper, heroSection.firstChild);

    // Create blur-fade overlay at the bottom of the hero
    const blurFade = document.createElement('div');
    blurFade.setAttribute('aria-hidden', 'true');
    blurFade.className = 'hero-blur-fade';
    heroSection.appendChild(blurFade);

    // Initialize Three.js inside the wrapper
    if (appRef.current) appRef.current.cleanup();
    appRef.current = new ThreeApp(wrapper);

    return () => {
      if (appRef.current) { appRef.current.cleanup(); appRef.current = null; }
      // Clean up injected DOM elements
      if (wrapper.parentNode) wrapper.parentNode.removeChild(wrapper);
      if (blurFade.parentNode) blurFade.parentNode.removeChild(blurFade);
    };
  }, []);

  // This component renders nothing to React — it injects into the existing hero DOM
  return null;
}
