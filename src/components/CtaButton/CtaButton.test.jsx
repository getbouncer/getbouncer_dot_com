import React from 'react'
import renderer from 'react-test-renderer'
import CtaButton from './CtaButton'

/* eslint-disable no-undef */

describe('CtaButton', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<CtaButton text="Click Me" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('CtaButton Internal', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<CtaButton isInternal text="Click Me" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('CtaButton Inverted', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<CtaButton inverted text="Click Me" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
