import React from 'react'
import renderer from 'react-test-renderer'
import DataSecurity from './DataSecurity'

/* eslint-disable no-undef */

describe('Data Security', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<DataSecurity />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
