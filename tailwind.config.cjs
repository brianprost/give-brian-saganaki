/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme("colors"),
        greece: {
          primary: "#0D5EAF",
          secondary: "#F2F5F9",
          accent: "#5B9ECC",
          neutral: "#1F2937",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#388E3C",
          warning: "#FFA726",
          error: "#D32F2F",
        },
      }),
    },
    daisyui: {
      themes: [
        {
          greece: {
            primary: "#0D5EAF",
            secondary: "#F2F5F9",
            accent: "#5B9ECC",
            neutral: "#1F2937",
            "base-100": "#FFFFFF",
            info: "#3ABFF8",
            success: "#388E3C",
            warning: "#FFA726",
            error: "#D32F2F",
          },
        },
      ],
    },
  },
  variants: {},
  plugins: [require("daisyui")],
};
