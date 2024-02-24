// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import tabBlocks from "docusaurus-remark-plugin-tab-blocks";

const remarkPluginsConfig = {
  remarkPlugins: [
    [
      tabBlocks, 
      {
        labels: [
          ["java", "Java"],
          ["kts", "Kotlin"],
          ["kotlin", "Kotlin"]
        ]
      }
    ]
  ]
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PineappleDevelopment',
  tagline: 'Sweet',
  favicon: 'img/pineapplefavicon.ico',

  // Set the production url of your site here
  url: 'https://docs.miles.sh/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'PineappleDevelopmentGroup', // Usually your GitHub org/user name.
  projectName: 'PineappleDocs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/PineappleDevelopmentGroup/PineappleDocs/tree/master',
          ...remarkPluginsConfig
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        pages: {
          ...remarkPluginsConfig
        }
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs', 
      {
        id: 'pineapple-lib',
        path: 'pineapple-lib',
        routeBasePath: 'pineapple-lib',
        sidebarPath: require.resolve('./sidebars/pineapplesidebar.js'),
        editUrl: "https://github.com/PineappleDevelopmentGroup/PineappleDocs/tree/master",
        ...remarkPluginsConfig
      },
    ],
    [
      '@docusaurus/plugin-content-docs', 
      {
        id: 'pineapple-chat',
        path: 'pineapple-chat',
        routeBasePath: 'pineapple-chat',
        sidebarPath: require.resolve('./sidebars/pineapplesidebar.js'),
        editUrl: "https://github.com/PineappleDevelopmentGroup/PineappleDocs/tree/master",
        ...remarkPluginsConfig
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/pineappledev-social-card.png',
      docs: {
        sidebar: {
          hideable: true
        },
      },
      navbar: {
        title: 'Pineapple Development',
        logo: {
          alt: 'Pineapple Development Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            position: 'left',
            docId: 'index',
            docsPluginId: 'pineapple-lib',
            label: 'Pineapple Lib',
          },
          {
            type: "docsVersionDropdown",
            position: "right",
            docsPluginId: 'pineapple-lib',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/PineappleDevelopmentGroup',
            label: 'GitHub',
            position: 'right',
          },

        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'PineappleLib',
                to: '/docs/libraries',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/NXW2FuQ6a5',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/PineappleDevelopmentGroup/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PineappleDevelopmentGroup, Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.vsDark,
        additionalLanguages: [
          'java',
          'kotlin',
          'groovy',
          'json',
          'yaml',
        ],
      },
    }),
};

export default config;
