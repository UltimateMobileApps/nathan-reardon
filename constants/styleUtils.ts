import { STYLES, GRADIENTS, ANIMATIONS } from './styles';

// Slugify function for URL generation
export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/™/g, '') // Remove trademark symbol
    .replace(/®/g, '') // Remove registered symbol
    .replace(/[^\w\s-]/g, '') // Remove special characters except spaces and hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim(); // Trim whitespace
};

// Helper function to combine multiple style constants
export const combineStyles = (...styles: string[]) => {
  return styles.filter(Boolean).join(' ');
};

// Pre-built button component styles using the constants
export const ButtonStyles = {
  // Primary gradient button (main CTA) - Patriotic red to blue
  primary: combineStyles(
    "bg-gradient-to-r from-red-500 to-blue-600",
    "hover:from-red-600 hover:to-blue-700",
    "text-white px-8 py-4 rounded-lg font-medium",
    "transition-all duration-300 shadow-lg hover:shadow-xl",
    "transform hover:-translate-y-1 hover:scale-105",
    "inline-block"
  ),
  
  // Secondary gradient button (blue theme)
  secondary: combineStyles(
    "bg-gradient-to-r from-blue-600 to-blue-400",
    "hover:from-blue-700 hover:to-blue-500",
    "text-white px-8 py-4 rounded-lg font-medium",
    "transition-all duration-300 shadow-lg hover:shadow-xl",
    "transform hover:-translate-y-1 hover:scale-105",
    "inline-block"
  ),
  
  // Red theme button
  redGradient: combineStyles(
    "bg-gradient-to-r from-red-500 to-red-300",
    "hover:from-red-600 hover:to-red-400",
    "text-white px-8 py-4 rounded-lg font-medium",
    "transition-all duration-300 shadow-lg hover:shadow-xl",
    "transform hover:-translate-y-1 hover:scale-105",
    "inline-block"
  ),
  
  // Outline button with red accent
  outline: combineStyles(
    "border border-red-600 text-red-500",
    "hover:bg-gradient-to-r hover:from-red-600 hover:via-red-500 hover:to-red-600",
    "hover:text-white px-6 py-3 rounded-lg font-medium",
    "transition-all duration-300",
    "inline-block"
  ),
  
  // Ghost button
  ghost: combineStyles(
    "border border-gray-700 hover:border-blue-500",
    "text-gray-300 hover:text-white px-8 py-4 rounded-lg font-medium",
    "transition-all duration-300 hover:shadow-lg",
    "transform hover:-translate-y-1"
  )
};

// Pre-built card styles
export const CardStyles = {
  // Standard card with red hover
  standard: combineStyles(
    "bg-gray-900 border border-gray-800 rounded-xl overflow-hidden",
    "hover:border-red-500 transition-all duration-300 group"
  ),
  
  // Featured card with enhanced hover effects
  featured: combineStyles(
    "bg-gray-900 border border-gray-800 rounded-xl",
    "hover:border-red-500 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]",
    "transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02]"
  ),
  
  // Blue variant card
  blue: combineStyles(
    "bg-gray-900 border border-gray-800 rounded-xl overflow-hidden",
    "hover:border-blue-500 transition-all duration-300 group"
  )
};

// Text styles
export const TextStyles = {
  // Main heading with red accent
  heading: "text-3xl font-semibold text-red-500",
  
  // Subheading
  subheading: "text-xl font-medium text-gray-100",
  
  // Body text
  body: "text-gray-300",
  
  // Link with blue accent
  link: "text-blue-500 hover:text-blue-400 hover:underline transition-colors",
  
  // Gradient text for hero
  heroGradient: "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-500",
  
  // Red accent text
  accent: "text-red-500 font-medium"
};

// Layout utilities
export const LayoutStyles = {
  container: "max-w-7xl mx-auto px-6",
  section: "py-20",
  grid: {
    two: "grid grid-cols-1 md:grid-cols-2 gap-8",
    three: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
    four: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
  }
};

// Animation utilities
export const AnimationStyles = {
  fadeInUp: "opacity-0 translate-y-10",
  fadeInLeft: "opacity-0 -translate-x-10",
  fadeInRight: "opacity-0 translate-x-10",
  visible: "opacity-100 translate-y-0 translate-x-0"
};

// Common component combinations
export const ComponentStyles = {
  navLink: "hover:text-red-500 transition-all duration-300",
  logo: "bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent text-xl font-semibold tracking-tight",
  sectionHeading: "text-3xl font-semibold text-red-500 mb-10",
  
  // Social links with different colors
  socialLink: {
    linkedin: "hover:text-blue-400 hover:drop-shadow-[0_0_4px_#3b82f6] transition",
    instagram: "hover:text-red-500 hover:drop-shadow-[0_0_4px_#dc2626] transition",
    general: "hover:text-blue-400 hover:drop-shadow-[0_0_4px_#3b82f6] transition"
  }
};
