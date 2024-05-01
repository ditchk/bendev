/** @type {import('tailwindcss').Config} */

export const darkMode = ["class"];
export const content = [
  './pages/**/*.{ts,tsx}',
  './components/**/*.{ts,tsx}',
  './app/**/*.{ts,tsx}',
  './src/**/*.{ts,tsx}',
];
export const theme = {
  container: {
    center: true,
    padding: "2rem",
    screens: {
      "2xl": "1400px",
      "xl": "1200px",
      "lg": "1024px",
      "md": "768px",
      "sm": "640px",
      "xs": "350px"
    },
  },
  // extend: {
  //   colors: {
  //     border: "hsl(var(--border))",
  //     input: "hsl(var(--input))",
  //     ring: "hsl(var(--ring))",
  //     background: "hsl(var(--background))",
  //     foreground: "hsl(var(--foreground))",
  //     primary: {
  //       DEFAULT: "hsl(var(--primary))",
  //       foreground: "hsl(var(--primary-foreground))",
  //     },
  //     secondary: {
  //       DEFAULT: "hsl(var(--secondary))",
  //       foreground: "hsl(var(--secondary-foreground))",
  //     },
  //     destructive: {
  //       DEFAULT: "hsl(var(--destructive))",
  //       foreground: "hsl(var(--destructive-foreground))",
  //     },
  //     muted: {
  //       DEFAULT: "hsl(var(--muted))",
  //       foreground: "hsl(var(--muted-foreground))",
  //     },
  //     accent: {
  //       DEFAULT: "hsl(var(--accent))",
  //       foreground: "hsl(var(--accent-foreground))",
  //     },
  //     popover: {
  //       DEFAULT: "hsl(var(--popover))",
  //       foreground: "hsl(var(--popover-foreground))",
  //     },
  //     card: {
  //       DEFAULT: "hsl(var(--card))",
  //       foreground: "hsl(var(--card-foreground))",
  //     },
  //   },
  //   keyframes: {
  //     typing: {
  //       "0%": {
  //         width: "0%",
  //         visibility: "hidden"
  //       },
  //       "100%": {
  //         width: "90%"
  //       }
  //     },
  //     blink: {
  //       "50%": {
  //         borderColor: "transparent"
  //       },
  //       "100%": {
  //         borderColor: "transparent"
  //       }
  //     },
  //     "fade-down": {
  //       "0%": {
  //         opacity: 0,
  //         transform: "translateY(-10px)",
  //       },
  //       "80%": {
  //         opacity: 0.6,
  //       },
  //       "100%": {
  //         opacity: 1,
  //         transform: "translateY(0px)",
  //       },
  //     },
  //     // Tooltip
  //     "slide-up-fade": {
  //       "0%": { opacity: 0, transform: "translateY(6px)" },
  //       "100%": { opacity: 1, transform: "translateY(0)" },
  //     },
  //     "slide-down-fade": {
  //       "0%": { opacity: 0, transform: "translateY(-6px)" },
  //       "100%": { opacity: 1, transform: "translateY(0)" },
  //     },
  //   },
  //   animation: {
  //     "accordion-down": "accordion-down 0.2s ease-out",
  //     "accordion-up": "accordion-up 0.2s ease-out",
  //     typing: "typing 3s steps(100) alternate, .5s infinite"
  //   },
  // },
};
// eslint-disable-next-line no-undef
export const plugins = [require("tailwindcss-animate")];