/* eslint-disable global-require, camelcase, import/no-extraneous-dependencies */
const path = require('path')
const firebase = require('firebase')

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
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'bouncer',
        accessToken: `${process.env.PRISMIC_API_KEY}`,
        schemas: {
          globals: require('./src/schemas/globals.json'),
          homepage: require('./src/schemas/homepage.json'),
          dashboard: require('./src/schemas/dashboard.json'),
          authentication: require('./src/schemas/authentication.json'),
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
    {
      resolve: `gatsby-plugin-firebase`,
      options: {
        credentials: {
          apiKey: `${process.env.GATSBY_FIREBASE_API_KEY}`,
          authDomain: `${process.env.GATSBY_FIREBASE_AUTH_DOMAIN}`,
          databaseURL: `${process.env.GATSBY_FIREBASE_DATABASE_URL}`,
          projectId: `${process.env.GATSBY_FIREBASE_PROJECT_ID}`,
          storageBucket: `${process.env.GATSBY_FIREBASE_STORAGE_BUCKET}`,
          messagingSenderId: `${process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID}`,
          appId: `${process.env.GATSBY_FIREBASE_APP_ID}`,
        }, 
        features: {
          auth: true,
          database: false,
          firestore: true,
          storage: false,
          messaging: false,
          functions: false,
        }
      }
    }
  ],
}
