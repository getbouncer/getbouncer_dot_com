import React from 'react'
import renderer from 'react-test-renderer'
import { describe, expect, it } from 'jest'
import DataSecurity from './DataSecurity'

describe('Data Security', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<DataSecurity />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
