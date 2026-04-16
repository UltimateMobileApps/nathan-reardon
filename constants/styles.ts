// High-tech cinematic color palette and design constants
export const COLORS = {
  // Core brand colors
  primary: {
    crimson: {
      50: '#fff1f3',
      100: '#ffe4e8',
      200: '#fecdd6',
      300: '#fda4b4',
      400: '#fb7188',
      500: '#e14d67',
      600: '#c23652',
      700: '#a22643',
      800: '#891f3b',
      900: '#5a1628',
    },
    blue: {
      50: '#eef7ff',
      100: '#d9edff',
      200: '#bbddff',
      300: '#8ec7ff',
      400: '#5aa9ff',
      500: '#2f88ff',
      600: '#1d67de',
      700: '#184fb0',
      800: '#163f88',
      900: '#132d5f',
    },
    silver: '#eef4ff',
  },
  
  // Background and neutral colors
  background: {
    primary: '#040814',
    secondary: '#091225',
    card: '#101a2e',
    overlay: 'rgba(3, 8, 20, 0.78)',
  },
  
  // Text colors
  text: {
    primary: '#f8fbff',
    secondary: '#cbd5e1',
    muted: '#8c9ab2',
    accent: '#5aa9ff',
  },
  
  // Gray scale
  gray: {
    100: '#eef4ff',
    300: '#c9d6eb',
    400: '#98a8c4',
    700: '#31415e',
    800: '#172134',
    900: '#0c1323',
    950: '#040814',
  }
} as const;

// Gradient definitions
export const GRADIENTS = {
  // Primary CTA gradient - silver to electric blue with restrained crimson edge
  primaryCTA: 'bg-[linear-gradient(135deg,#eef4ff_0%,#cfe2ff_20%,#5aa9ff_55%,#184fb0_82%,#8b223f_100%)]',
  primaryCTAHover: 'bg-[linear-gradient(135deg,#f8fbff_0%,#dcebff_20%,#75b7ff_52%,#205ad1_82%,#a52b4e_100%)]',
  
  // Alternative accent gradients
  redToWhite: 'bg-[linear-gradient(135deg,#b52d4b_0%,#d7647c_42%,#eef4ff_100%)]',
  blueToRed: 'bg-[linear-gradient(135deg,#2f88ff_0%,#184fb0_58%,#b52d4b_100%)]',
  patrioticTriple: 'bg-[linear-gradient(135deg,#eef4ff_0%,#5aa9ff_50%,#b52d4b_100%)]',
  
  // Secondary gradients
  secondaryCTA: 'bg-[linear-gradient(135deg,rgba(18,30,52,0.95)_0%,rgba(22,63,136,0.92)_48%,rgba(90,169,255,0.9)_100%)]',
  secondaryCTAHover: 'bg-[linear-gradient(135deg,rgba(24,38,65,0.98)_0%,rgba(29,103,222,0.95)_52%,rgba(132,192,255,0.92)_100%)]',
  
  // Text gradients
  heroText: 'bg-[linear-gradient(90deg,#f8fbff_0%,#dce9ff_24%,#8ec7ff_55%,#4b97ff_76%,#d7647c_100%)]',
  accentText: 'bg-[linear-gradient(90deg,#dce9ff_0%,#5aa9ff_54%,#d7647c_100%)]',
  
  // Background gradients
  heroBackground: 'bg-[radial-gradient(circle_at_top,#152443_0%,#091225_42%,#040814_100%)]',
  cardGradient: 'bg-[linear-gradient(145deg,rgba(18,30,52,0.88)_0%,rgba(10,17,32,0.96)_100%)]',
} as const;

// Common styling patterns
export const STYLES = {
  // Button styles
  buttons: {
    primary: `${GRADIENTS.primaryCTA} text-white hover:text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-[0_18px_40px_rgba(8,16,34,0.45)] hover:shadow-[0_24px_48px_rgba(29,103,222,0.28)] border border-white/15 transform hover:-translate-y-0.5`,
    secondary: `border border-[#365072] hover:border-[#7cb8ff] text-[#cbd5e1] hover:text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 bg-white/5`,
    accent: `border border-[#8b223f] text-[#f0b7c2] hover:bg-[linear-gradient(135deg,#561427_0%,#8b223f_52%,#c23652_100%)] hover:text-white px-6 py-3 rounded-xl font-medium transition-all duration-300`,
  },
  
  // Card styles
  cards: {
    primary: 'bg-[#0d1729]/90 border border-[#243552] rounded-xl overflow-hidden hover:border-[#5aa9ff]/60 transition-all duration-300 group',
    secondary: 'bg-[#111b2f]/72 border border-[#2b3f61] rounded-lg backdrop-blur-sm',
    featured: 'bg-[#0d1729]/90 border border-[#243552] rounded-xl hover:border-[#7cb8ff]/60 hover:shadow-[0_0_24px_rgba(47,136,255,0.22)] transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02]',
  },
  
  // Text styles
  text: {
    heading: 'text-3xl font-semibold text-[#8ec7ff]',
    subheading: 'text-xl font-medium text-[#f8fbff]',
    body: 'text-[#cbd5e1]',
    accent: 'text-[#5aa9ff] font-medium',
    link: 'text-[#7cb8ff] hover:text-[#dce9ff] hover:underline transition-colors',
  },
  
  // Layout styles
  layout: {
    container: 'mx-auto max-w-6xl px-4',
    section: 'py-16',
    card: 'p-6',
    spacing: {
      xs: 'space-y-2',
      sm: 'space-y-4',
      md: 'space-y-6',
      lg: 'space-y-8',
      xl: 'space-y-12',
    }
  },
  
  // Effects and animations
  effects: {
    glow: {
      red: 'hover:drop-shadow-[0_0_6px_#c23652]',
      blue: 'hover:drop-shadow-[0_0_6px_#2f88ff]',
    },
    blur: {
      backdrop: 'backdrop-blur-sm',
      heavy: 'blur-3xl',
    },
    shadow: {
      card: 'shadow-2xl shadow-[#050b18]/60',
      button: 'shadow-lg hover:shadow-xl',
    }
  }
} as const;

// Animation constants
export const ANIMATIONS = {
  transition: 'transition-all duration-300',
  transitionFast: 'transition-all duration-150',
  transitionSlow: 'transition-all duration-500',
  hover: {
    scale: 'transform hover:scale-105',
    lift: 'transform hover:-translate-y-2',
    button: 'transform hover:-translate-y-0.5',
  }
} as const;

// Responsive breakpoints (for reference)
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Component-specific style combinations
export const COMPONENT_STYLES = {
  heroButton: `${STYLES.buttons.primary} ${ANIMATIONS.hover.button}`,
  navLink: `hover:text-[#dce9ff] ${ANIMATIONS.transition}`,
  logo: `text-xl font-semibold tracking-tight bg-[linear-gradient(90deg,#eef4ff_0%,#8ec7ff_55%,#d7647c_100%)] bg-clip-text text-transparent`,
  sectionHeading: `${STYLES.text.heading} mb-10`,
  cardHover: `${STYLES.cards.primary} ${ANIMATIONS.hover.lift}`,
} as const;
