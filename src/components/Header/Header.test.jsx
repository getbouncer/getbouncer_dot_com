import React from 'react'
import renderer from 'react-test-renderer'
import { PureHeader as Header } from './Header'

/* eslint-disable no-undef */

describe('Header', () => {
  it('renders correctly', () => {
    const globals = {
      cta_button: 'cta button',
      login_button: 'login button',
      products_menu: 'products menu',
      pricing_menu: 'pricing',
      resources_menu: 'resources menu',
      logo: {
        alt: 'logo',
        url: 'https://www.example.com/logo.svg',
      },
      documentation_link: {
        url: 'https://www.example.com/documentation',
      },
    }

    const location = {
      port: '1234',
      protocol: 'https:',
      hostname: 'localhost',
    }

    const products = [
      {
        node: {
          id: 1,
          uid: 'product 1',
          data: {
            product_logo: {
              url: 'https://www.example.com/product_1_logo.svg',
              alt: 'product 1 logo',
            },
            product_headline_home: {
              text: 'product 1 headline',
            },
          },
        },
      },
      {
        node: {
          id: 2,
          uid: 'product 2',
          data: {
            product_logo: {
              url: 'https://www.example.com/product_2_logo.svg',
              alt: 'product 2 logo',
            },
            product_headline_home: {
              text: 'product 2 headline',
            },
          },
        },
      },
    ]

    const tree = renderer
      .create(<Header globals={globals} location={location} products={products} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
