import React from 'react'
import renderer from 'react-test-renderer'
import RequestDemo from './RequestDemo'

/* eslint-disable no-undef */

describe('RequestDemo', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<RequestDemo />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
