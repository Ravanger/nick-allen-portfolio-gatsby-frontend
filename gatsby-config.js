module.exports = {
  siteMetadata: {
    title: "Nick Allen's portfolio home page",
    description: 'Nick Allen is a designer from Toronto, ON',
    author: 'Boris Rossovsky',
    siteUrl: 'https://nick-allen.netlify.app',
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
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'https://nick-allen-portfolio-strapi.herokuapp.com',
        queryLimit: 1000, // Default to 100
        contentTypes: ['illustrations', 'ux-projects'],
        singleTypes: ['landing-page', 'about-page', 'social'],
      },
    },
    {
      resolve: 'gatsby-alias-imports',
      options: {
        aliases: {
          '@components': 'src/components',
          '@pages': 'src/pages',
          '@styles': 'src/static/style',
        },
        rootFolder: 'src',
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://nick-allen.netlify.app',
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
        path: `${__dirname}/src/static/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Nick Allen's Portfolio",
        short_name: 'nickallen',
        start_url: '/',
        background_color: '#FFF2E4',
        theme_color: '#FFF2E4',
        display: 'minimal-ui',
        icon: 'src/static/images/favicon.png',
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
