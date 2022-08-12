// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CFLib Docs',
  tagline: 'We do the hard work so you can do the fun work.',
  url: 'https://cflib.pages.dev',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/CFLib-logo-narrow.svg',
  organizationName: 'AtomicRobotics3805', // Usually your GitHub org/user name.
  projectName: 'CFLib-Docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),

          editUrl: "https://github.com/AtomicRobotics3805/CFLib-Docs/edit/main/",
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
      navbar: {
        title: 'Docs',
        logo: {
          alt: 'CFLib Logo',
          src: 'img/CFLib-logo-wide.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Get Started',
          },
          {
            href: 'https://github.com/AtomicRobotics3805',
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
                label: 'Get Started',
                to: '/intro',
              },
            ],
          },
          {
            title: 'Connect',
            items: [
              {
                label: 'Email',
                href: 'mailto:AtomicRobotics3805@gmail.com',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/3805atomicrobotics/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/3805AtomicRobot',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Atomic Robotics. Built with Docusaurus. Hosted on Cloudflare Pages. Last updated ${new Date().toUTCString()}`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['groovy', 'kotlin'],
      },
    }),
};

module.exports = config;
