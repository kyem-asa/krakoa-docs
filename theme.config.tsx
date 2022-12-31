import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Gardens of Krakoa</span>,
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Built with Nextra.',
  },

  darkMode: true,

  primaryHue: 360,
}

export default config