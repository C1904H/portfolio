/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
			fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
				},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))',
					50: 'hsl(var(--primary) / 0.1)',
          100: 'hsl(var(--primary) / 0.2)',
          200: 'hsl(var(--primary) / 0.3)',
          300: 'hsl(var(--primary) / 0.4)',
          400: 'hsl(var(--primary) / 0.5)',
          500: 'hsl(var(--primary) / 0.6)',
          600: 'hsl(var(--primary) / 0.7)',
          700: 'hsl(var(--primary) / 0.8)',
          800: 'hsl(var(--primary) / 0.9)',
          900: 'hsl(var(--primary))',
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))',
					50: 'hsl(var(--secondary) / 0.1)',
          100: 'hsl(var(--secondary) / 0.2)',
          200: 'hsl(var(--secondary) / 0.3)',
          300: 'hsl(var(--secondary) / 0.4)',
          400: 'hsl(var(--secondary) / 0.5)',
          500: 'hsl(var(--secondary) / 0.6)',
          600: 'hsl(var(--secondary) / 0.7)',
          700: 'hsl(var(--secondary) / 0.8)',
          800: 'hsl(var(--secondary) / 0.9)',
          900: 'hsl(var(--secondary))',
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))',
					50: 'hsl(var(--accent) / 0.1)',
          100: 'hsl(var(--accent) / 0.2)',
          200: 'hsl(var(--accent) / 0.3)',
          300: 'hsl(var(--accent) / 0.4)',
          400: 'hsl(var(--accent) / 0.5)',
          500: 'hsl(var(--accent) / 0.6)',
          600: 'hsl(var(--accent) / 0.7)',
          700: 'hsl(var(--accent) / 0.8)',
          800: 'hsl(var(--accent) / 0.9)',
          900: 'hsl(var(--accent))',
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
				highlight: '#facc15', // Example highlight color (yellow)
				teal: {
					800: '#008080',
				}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate"),],
};
