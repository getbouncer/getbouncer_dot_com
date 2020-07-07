/* eslint-disable global-require, camelcase, import/no-extraneous-dependencies */
require('dotenv').config({
  path: '.env',
})

module.exports = {
  siteMetadata: {
    siteUrl: 'https://getbouncer.com',
    title: 'Bouncer',
    description: 'Bouncer is an SDK for scanning and verifying credit cards and photo IDs in mobile apps.',
    author: '@bouncer',
  },
  pathPrefix: '/',
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'config/typography.js',
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'bouncer',
        accessToken: `${process.env.API_KEY}`,
        schemas: {
          globals: require('./src/schemas/globals.json'),
          homepage: require('./src/schemas/homepage.json'),
          product: require('./src/schemas/product.json'),
          contact: require('./src/schemas/contact.json'),
          pricing: require('./src/schemas/pricing.json'),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          src: 'src',
          '~styles': 'src/styles',
          '~components': 'src/components',
          '~globals': 'src/globals',
          '~slices': 'src/slices',
          '~fonts': 'src/fonts',
          '~images': 'src/images',
          '~hooks': 'src/hooks',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Bouncer',
        short_name: 'Bouncer',
        start_url: '/',
        background_color: '#5569cf',
        theme_color: '#5569cf',
        display: 'standalone',
        icon: 'src/images/logo-bouncer.png',
      },
    },
    'gatsby-plugin-netlify',
  ],
}
