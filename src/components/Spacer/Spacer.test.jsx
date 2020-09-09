import React from 'react'
import renderer from 'react-test-renderer'
import { describe, expect, it } from 'jest'
import Spacer from './Spacer'

describe('Spacer', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Spacer height={20} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
