// @ts-check
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

const moduleRepoUrl = "https://github.com/Windows365Management/PSCloudPC";
const siteRepoUrl = "https://github.com/Windows365Management/PSCloudPC-site";
const galleryUrl = "https://www.powershellgallery.com/packages/PSCloudPC";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "PSCloudPC",
  tagline: "Manage Windows 365 Cloud PCs from PowerShell",
  favicon: "img/favicon.ico",

  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
    faster: {
      // The SWC HTML minifier strips attribute quotes, which stops LinkedIn
      // from reading the Open Graph tags; use the default minifier instead.
      swcHtmlMinimizer: false,
    },
  },

  url: "https://pscloudpc.com",
  baseUrl: "/",
  trailingSlash: false,

  organizationName: "Windows365Management",
  projectName: "PSCloudPC-site",

  onBrokenLinks: "throw",
  onBrokenAnchors: "throw",

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "throw",
    },
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    // Consent defaults must be injected before Google Analytics, so gtag is configured
    // here (after the consent plugin) instead of through the classic preset.
    "./src/plugins/gtag-consent.js",
    [
      "@docusaurus/plugin-google-gtag",
      {
        trackingID: "G-6HN1ZGL8WJ",
        anonymizeIP: true,
      },
    ],
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          editUrl: `${siteRepoUrl}/tree/main/website/`,
          showLastUpdateTime: false,
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/social-card.png",
      metadata: [
        { property: "og:site_name", content: "PSCloudPC" },
        { property: "og:type", content: "website" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:alt", content: "PSCloudPC: manage Windows 365 from PowerShell" },
        { name: "twitter:image:alt", content: "PSCloudPC: manage Windows 365 from PowerShell" },
        {
          name: "keywords",
          content: "PSCloudPC, Windows 365, Cloud PC, PowerShell, Microsoft Graph, Intune",
        },
      ],
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: "PSCloudPC",
        style: "dark",
        logo: {
          alt: "PSCloudPC logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "docsSidebar",
            position: "left",
            label: "Docs",
          },
          {
            type: "docSidebar",
            sidebarId: "commandsSidebar",
            position: "left",
            label: "Cmdlets",
          },
          { to: "/contributing", label: "Contributing", position: "left" },
          { to: "/about", label: "About", position: "left" },
          {
            href: galleryUrl,
            label: "PowerShell Gallery",
            position: "right",
          },
          {
            href: moduleRepoUrl,
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              { label: "Introduction", to: "/docs/intro" },
              { label: "Installation", to: "/docs/getting-started/installation" },
              { label: "Authentication", to: "/docs/getting-started/authentication" },
              { label: "Cmdlet reference", to: "/docs/commands" },
            ],
          },
          {
            title: "Community",
            items: [
              { label: "GitHub Discussions", href: `${moduleRepoUrl}/discussions` },
              { label: "Report an issue", href: `${moduleRepoUrl}/issues/new/choose` },
              { label: "Contributing", to: "/contributing" },
              { label: "About", to: "/about" },
            ],
          },
          {
            title: "More",
            items: [
              { label: "GitHub", href: moduleRepoUrl },
              { label: "PowerShell Gallery", href: galleryUrl },
              { label: "Changelog", href: `${moduleRepoUrl}/blob/develop/CHANGELOG.md` },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PSCloudPC contributors. PSCloudPC is a community project and is not affiliated with or endorsed by Microsoft.`,
      },
      prism: {
        theme: prismThemes.vsLight,
        darkTheme: prismThemes.vsDark,
        additionalLanguages: ["powershell", "json"],
      },
    }),
};

export default config;
