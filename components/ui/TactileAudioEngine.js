/**
 * TactileAudioEngine — Procedural Web Audio Synthesizer for Sivnco
 * Generates tactile clicks, harmonic chimes, and synth notes in real-time.
 * Zero external audio downloads, zero network latency, <3KB footprint.
 */

class AudioEngine {
  constructor() {
    this.ctx = null;
    this.enabled = false;
    this.hasUserInteracted = false;
  }

  init() {
    if (typeof window === 'undefined') return;
    
    // Check localStorage preference (default: off until toggled or allowed)
    try {
      const stored = localStorage.getItem('sivnco_audio_enabled');
      if (stored !== null) {
        this.enabled = stored === 'true';
      }
    } catch (e) {}

    const unlock = () => {
      this.hasUserInteracted = true;
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      window.removeEventListener('pointerdown', unlock);
      window.removeEventListener('keydown', unlock);
    };

    window.addEventListener('pointerdown', unlock, { once: true });
    window.addEventListener('keydown', unlock, { once: true });
  }

  getContext() {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  toggle() {
    this.enabled = !this.enabled;
    try {
      localStorage.setItem('sivnco_audio_enabled', String(this.enabled));
    } catch (e) {}

    if (this.enabled) {
      this.playChime(659.25, 0.12); // E5 confirmation chime
    }
    return this.enabled;
  }

  isEnabled() {
    return this.enabled;
  }

  /**
   * Warm wooden tactile micro-tick for buttons and capsules
   */
  playTick(pitch = 800) {
    if (!this.enabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const now = ctx.currentTime;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(pitch, now);
      osc.frequency.exponentialRampToValueAtTime(120, now + 0.04);

      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.045);
    } catch (e) {}
  }

  /**
   * Soft resonant harmonic chime for card hover / interactions
   */
  playHoverChime(freq = 440) {
    if (!this.enabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const now = ctx.currentTime;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.035, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.26);
    } catch (e) {}
  }

  /**
   * Rising two-tone chord for tab switching and filters
   */
  playTabShift() {
    if (!this.enabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      [440, 659.25].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const startTime = now + idx * 0.06;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.04, startTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.18);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.19);
      });
    } catch (e) {}
  }

  /**
   * Programmable melodic note for the interactive synth keyboard
   */
  playSynthNote(freq, type = 'sine', duration = 0.4) {
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const now = ctx.currentTime;

      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);

      // Warm attack & smooth decay
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.15, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + duration + 0.05);
    } catch (e) {}
  }

  playChime(freq = 528, duration = 0.3) {
    const ctx = this.getContext();
    if (!ctx) return;
    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const now = ctx.currentTime;
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + duration);
    } catch (e) {}
  }
}

let globalAudioInstance = null;

export function getAudioEngine() {
  if (!globalAudioInstance && typeof window !== 'undefined') {
    globalAudioInstance = new AudioEngine();
    globalAudioInstance.init();
  }
  return globalAudioInstance;
}

export default getAudioEngine;
