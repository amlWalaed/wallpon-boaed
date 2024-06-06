import plugin from "tailwindcss/plugin";

export const appPlugin = plugin(function ({ addUtilities, addComponents }) {
  addUtilities({
    ".text-truncate": {
      "@apply break-all text-start line-clamp-1": {},
    },
    ".text-truncate-2": {
      "@apply overflow-hidden text-ellipsis whitespace-nowrap": {},
    },
  });
  addComponents({
    ".page-wrapper": {
      "@apply space-y-6": {},
    },
    ".header": {
      "@apply flex flex-col items-start gap-3 mb-6 text-start": {},
    },
    ".title-auth": {
      "@apply text-3xl font-bold text-primary text-center mb-6": {},
    },
    ".title": {
      "@apply text-5xl font-semibold text-black": {},
    },
    ".card-blur": {
      "@apply rounded-lg bg-white/30": {},
    },
  });
}, {});
