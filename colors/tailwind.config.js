/**
 * FITSIZ — готовый конфиг Tailwind.
 * Подключите цвета, шрифты и радиусы в свой проект:
 *
 *   const fitsiz = require("./colors/tailwind.config.js");
 *   module.exports = { theme: { extend: fitsiz.theme.extend }, plugins: [...] };
 *
 * Правила бренда:
 *   • только 4 цвета: fitsiz-black, fitsiz-white, fitsiz-green, fitsiz-lime;
 *   • pill-кнопки (rounded-pill) и карточки (rounded-card / rounded-card-lg);
 *   • шрифты: font-heading (Russo One), font-body (Inter);
 *   • без градиентов, без теней.
 */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        fitsiz: {
          black: "#121212",
          white: "#FFFFFF",
          green: "#42BA1A",
          "green-hover": "#3AA817",
          lime: "#C2D918",
          "lime-hover": "#B3C713",
          "surface-1": "#1A1A1A",
          "surface-2": "#232323",
          muted: "#8A8A8A",
        },
      },
      fontFamily: {
        heading: ['"Russo One"', "system-ui", "sans-serif"],
        body: ['"Inter"', "system-ui", "sans-serif"],
      },
      borderRadius: {
        pill: "9999px",
        card: "24px",
        "card-lg": "32px",
        chip: "16px",
      },
      letterSpacing: {
        "fitsiz-heading": "0.02em",
        "fitsiz-cta": "0.04em",
        "fitsiz-badge": "0.06em",
      },
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        ".btn-fitsiz": {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          padding: "14px 28px",
          fontFamily: theme("fontFamily.body").join(","),
          fontWeight: 700,
          fontSize: "16px",
          lineHeight: 1,
          textTransform: "uppercase",
          letterSpacing: theme("letterSpacing.fitsiz-cta"),
          borderRadius: theme("borderRadius.pill"),
          backgroundColor: theme("colors.fitsiz.green"),
          color: theme("colors.fitsiz.black"),
          border: "none",
          cursor: "pointer",
          transition: "background-color .15s ease, transform .08s ease",
          "&:hover": { backgroundColor: theme("colors.fitsiz.green-hover") },
          "&:active": { transform: "scale(0.98)" },
          "&:focus-visible": {
            outline: `2px solid ${theme("colors.fitsiz.lime")}`,
            outlineOffset: "2px",
          },
        },
        ".badge-fitsiz": {
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          padding: "6px 12px",
          fontFamily: theme("fontFamily.body").join(","),
          fontWeight: 700,
          fontSize: "12px",
          textTransform: "uppercase",
          letterSpacing: theme("letterSpacing.fitsiz-badge"),
          borderRadius: theme("borderRadius.pill"),
          backgroundColor: theme("colors.fitsiz.green"),
          color: theme("colors.fitsiz.black"),
        },
        ".card-fitsiz": {
          backgroundColor: theme("colors.fitsiz.surface-1"),
          color: theme("colors.fitsiz.white"),
          borderRadius: theme("borderRadius.card"),
          padding: "24px",
        },
      });
    },
  ],
};
