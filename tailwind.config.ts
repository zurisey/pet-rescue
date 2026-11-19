import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#14B8A6", // Teal-500
          hover: "#0D9488", // Teal-600
          light: "#CCFBF1", // Teal-50
        },
        accent: {
          DEFAULT: "#F59E0B", // Amber-500
          hover: "#D97706", // Amber-600
        },
        background: "#F8FAFC", // Slate-50 (Natural bright clean)
        surface: "#FFFFFF",
        text: {
          main: "#1E293B", // Slate-800
          muted: "#64748B", // Slate-500
        }
      },
      borderRadius: {
        'pet': '14px', // Radius khusus sesuai permintaan 13-15px
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;