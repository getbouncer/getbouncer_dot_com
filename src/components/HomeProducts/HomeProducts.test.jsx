import React from 'react'
import renderer from 'react-test-renderer'
import { describe, expect, it } from 'jest'
import HomeProducts from './HomeProducts'

describe('HomeProduct', () => {
  it('renders correctly', () => {
    const data = {
      primary: {
        products_headline: {
          html: '<h1>products headline</h1>',
        },
      },
      items: [
        {
          products: {
            document: {
              data: {
                product_logo: {
                  alt: 'product 1 logo',
                  url: 'https://www.example.com/product_1_logo.png',
                },
                product_headline_home: {
                  html: '<h3>product 1 headline home</h3>',
                },
                product_description_home: {
                  html: '<p>product 1 description home</p>',
                },
                product_image_home: {
                  alt: 'product 1 image home',
                  url: 'https://www.example.com/product_1_image_home.png',
                },
                product_cta_home: 'product 1 cta home',
              },
              uid: 'product 1',
            },
          },
        },
        {
          products: {
            document: {
              data: {
                product_logo: {
                  alt: 'product 2 logo',
                  url: 'https://www.example.com/product_2_logo.png',
                },
                product_headline_home: {
                  html: '<h3>product 2 headline home</h3>',
                },
                product_description_home: {
                  html: '<p>product 2 description home</p>',
                },
                product_image_home: {
                  alt: 'product 2 image home',
                  url: 'https://www.example.com/product_2_image_home.png',
                },
                product_cta_home: 'product 2 cta home',
              },
              uid: 'product 2',
            },
          },
        },
      ],
    }
    const tree = renderer
      .create(<HomeProducts input={data} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
