/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'white-color': 'hsl(0, 0%, 100%)', // Màu trắng
      },
      height: {
        '4/5': '82%', // Chiều cao 82%
      },
      width: {
        '960': '960px', // Chiều rộng cố định 960px
      },
      colors: {
        'my-blue': '#159bee', // Màu xanh tùy chỉnh
        'button-color': '#598bd5', // Màu cho button
      },
      gap: {
        '10': '1rem', // Khoảng cách gap 1rem
      },
      textColor: {
        'text-color': 'hsl(240, 4%, 36%)', // Màu text
      }
    },
  },
  plugins: [],
}
