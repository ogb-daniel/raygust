export type Route = {
  name: string;
  url: string;
  isAnchor?: boolean;
  step?: number;
  external?: boolean;
};

export const navRoutes: Route[] = [
  { name: "Features", url: "#step-2", isAnchor: true, step: 2 },
  { name: "Pricing", url: "#step-5", isAnchor: true, step: 5 },
  { name: "Docs", url: "/docs" },
];

export const footerColumns = [
  {
    title: "Product",
    links: [
      { name: "Features", url: "#step-2", isAnchor: true, step: 2 },
      { name: "Pricing", url: "#step-5", isAnchor: true, step: 5 },
      { name: "Changelog", url: "/changelog" },
      { name: "Roadmap", url: "/roadmap" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", url: "/about" },
      { name: "Blog", url: "/blog" },
      { name: "Careers", url: "/careers" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Help center", url: "/help-center" },
      { name: "Contact us", url: "/contact" },
      { name: "Privacy & terms", url: "/privacy" },
      { name: "Cookie policy", url: "/cookie-policy" },
      { name: "Sitemap", url: "/sitemap" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Documentation", url: "/docs" },
      { name: "SDK Reference", url: "/docs/sdk" },
      { name: "API Status", url: "/api-status" },
      { name: "GitHub", url: "https://github.com/ogb-daniel", external: true },
    ],
  },
];

export const actionRoutes = {
  login: "/login",
  signup: "/signup",
  contact: "/contact",
  sales: "/sales",
  privacy: "/privacy",
  terms: "/terms",
};
