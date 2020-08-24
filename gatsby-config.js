/* eslint-disable global-require, camelcase, import/no-extraneous-dependencies */
const path = require('path')

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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'config/typography.js',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-176052879-1',
      },
    },
    {
      resolve: 'gatsby-plugin-drift',
      options: {
        appId: '9cxskdrwwp8x',
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
          uproduct: require('./src/schemas/uproduct.json'),
          contact: require('./src/schemas/contact.json'),
          pricing: require('./src/schemas/pricing.json'),
          privacy_policy: require('./src/schemas/privacy_policy.json'),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/globals/Layout/index.js'),
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
    'gatsby-plugin-remove-trailing-slashes'
  ],
}
