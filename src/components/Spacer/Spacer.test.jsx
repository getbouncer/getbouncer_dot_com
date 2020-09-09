import React from 'react'
import renderer from 'react-test-renderer'
import Spacer from './Spacer'

/* eslint-disable no-undef */

describe('Spacer', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Spacer height={20} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
