import React from 'react'
import renderer from 'react-test-renderer'
import ProductHero from './ProductHero'

/* eslint-disable no-undef */

describe('ProductHero', () => {
  it('renders correctly', () => {
    const data = {
      product_name: {
        text: 'product',
      },
      product_logo: {
        alt: 'product logo',
        url: 'https://www.example.com/product_logo.svg',
      },
      product_image: {
        alt: 'product image',
        url: 'https://www.example.com/product_image.png',
      },
      product_headline: {
        html: '<h1>product headline</h1>',
        text: 'product headline',
      },
      product_cta: 'product cta',
      show_get_started: true,
    }
    const tree = renderer
      .create(<ProductHero data={data} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
