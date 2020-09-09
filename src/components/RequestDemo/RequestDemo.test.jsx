import React from 'react'
import renderer from 'react-test-renderer'
import { describe, expect, it } from 'jest'
import RequestDemo from './RequestDemo'

describe('RequestDemo', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<RequestDemo />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
