// Central config for the landing — edita aquí enlaces y precios.

export const LINKS = {
  github: "https://github.com/Aterm-labs/agent-sessions",
  openVsx: "https://open-vsx.org/extension/Zarritas/agent-sessions",
  marketplace:
    "https://marketplace.visualstudio.com/items?itemName=Zarritas.agent-sessions",
  // Releases de GitHub: ahí cuelga el .vsix descargable (instalación manual).
  releases: "https://github.com/Aterm-labs/agent-sessions/releases/latest",
  buyAnnual:
    "https://aterm.lemonsqueezy.com/checkout/buy/258755f8-8c93-41ab-b0b0-e8d07fdfcc25",
  buyMonthly:
    "https://aterm.lemonsqueezy.com/checkout/buy/87d06b1a-b038-434d-9ad3-b58553f4a4ea",
};

// TODO: ajusta los importes al precio real de tus productos en Lemon Squeezy.
export const PRICING = {
  annual: { price: "29 €", period: "/ año", note: "2 meses gratis" },
  monthly: { price: "3 €", period: "/ mes", note: "factura mensual" },
};

export const PROVIDERS = [
  "Claude Code",
  "Codex",
  "OpenCode",
  "Gemini",
  "Qwen Code",
  "Goose",
  "Factory Droid",
];
