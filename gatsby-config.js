module.exports = {
  siteMetadata: {
    title: "Nick Allen's portfolio home page",
    description: 'Nick Allen is a designer from Toronto, ON',
    author: 'Boris Rossovsky',
    siteUrl: 'https://site.url',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-netlify',
    'gatsby-plugin-emotion',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-alias-imports',
      options: {
        aliases: {
          '@components': 'src/components',
          '@pages': 'src/pages',
        },
        rootFolder: 'src',
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://site.url',
      },
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Roboto',
            variants: ['100'],
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: '${__dirname}/src/static/images',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Nick Allen's Portfolio",
        short_name: 'nickallen',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        // icon: 'src/images/gatsby-icon.png',
      },
    },
    // {
    //   resolve: 'gatsby-plugin-offline',
    //   options: {
    //     workboxConfig: {
    //       globPatterns: ['**/*.{js,jsx,jpg,png,html,css}'],
    //     },
    //   },
    // },
  ],
}
