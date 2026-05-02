---
name: SIVNCO Dark Matter
version: alpha
colors:
  primary: "#050505"      # Deep void background
  secondary: "#141414"    # Glass layer background
  accent: "#FF4D00"       # High-energy orange
  text-main: "#F0F0F0"    # Crisp interface text
  text-muted: "#888888"   # Atmospheric metadata
  glow-blue: "#6366F1"    # Secondary atmospheric glow
typography:
  h-massive:
    fontFamily: Space Grotesk
    fontSize: clamp(4rem, 15vw, 15rem)
    fontWeight: 700
    letterSpacing: -0.04em
  h-large:
    fontFamily: Space Grotesk
    fontSize: clamp(3rem, 8vw, 8rem)
    fontWeight: 600
  serif-italic:
    fontFamily: Cormorant Garamond
    fontStyle: italic
    fontWeight: 300
  mono-label:
    fontFamily: Space Grotesk
    fontSize: 0.75rem
    letterSpacing: 0.2em
    textTransform: uppercase
rounded:
  sm: 4px
  md: 12px
  lg: 24px
  full: 9999px
spacing:
  container: 4vw
  section: 15vh
  gap: 2rem
---

## Overview
Architectural Minimalism meets Cinematic Mystery. The "Dark Matter" identity evokes a premium digital gallery where light and motion define the space.

## Colors
The palette is rooted in deep blacks with high-energy accents and atmospheric glow orbs.
- **Primary (#050505):** The foundation. Deep, pure, and immersive.
- **Accent (#FF4D00):** The driver of interaction. Used for critical CTAs and indicators.
- **Glow Blue (#6366F1):** Used sparingly to add depth and "aurora" atmosphere.

## Typography
A mix of massive, modern sans-serif for impact and elegant, classical serif for texture.
- **Space Grotesk:** Massive headlines and technical labels.
- **Cormorant Garamond:** Italicized for storytelling and "soft" emphasis.

## Motion & Interaction
- **Fluidic:** Animations should feel organic, using custom Bezier curves (e.g., `cubic-bezier(0.19, 1, 0.22, 1)`).
- **Aurora Hover:** Interactive elements should trigger background glow shifts that follow the cursor.
- **Parallax:** Scroll-driven depth layers are essential for the "Dark Matter" feel.

## Do's and Don'ts
- **Do:** Use generous whitespace (negative space).
- **Do:** Use glassmorphism with high backdrop-blur (20px+).
- **Don't:** Use solid white backgrounds.
- **Don't:** Use harsh shadows; prefer subtle gradients and blurs.
