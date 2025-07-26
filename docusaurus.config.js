// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'EHR - Historia Clínica Electrónica',
  tagline: 'Documentación del sistema EHR: Backend y Frontend',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://everjulian.github.io',
  baseUrl: '/',

  organizationName: 'everjulian',
  projectName: 'EHR_Doc',
  deploymentBranch: 'gh-pages',

  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/everjulian/EHR_Doc/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'EHR',
        logo: {
          alt: 'EHR Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentación',
          },
          {
            href: 'https://github.com/Spectro28/ehr-backend',
            label: 'GitHub Backend',
            position: 'right',
          },
          {
            href: 'https://github.com/Spectro28/ehr-frontend',
            label: 'GitHub Frontend',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            label: 'GitHub Backend',
            href: 'https://github.com/Spectro28/ehr-backend',
          },
          {
            label: 'GitHub Frontend',
            href: 'https://github.com/Spectro28/ehr-frontend',
          },
        ],
        copyright: `© ${new Date().getFullYear()} EHR`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      markdown: {
        mermaid: true,
      },
    }),

  themes: ['@docusaurus/theme-mermaid'],
};

export default {
  ...config,
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
};
