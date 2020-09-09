import React from 'react'
import renderer from 'react-test-renderer'
import ThreeStepSlider from './ThreeStepSlider'

/* eslint-disable no-undef */

describe('ThreeStepSlider', () => {
  it('renders correctly', () => {
    const data = {
      items: [
        {
          step_title: 'step 1 title',
          step_description: {
            text: 'step 1 description',
          },
          illustration_title: 'illustration 1 title',
          step_illustration: {
            alt: 'step 1 illustration',
            url: 'https://www.example.com/step_1_illustration.png',
          },
        },
        {
          step_title: 'step 2 title',
          step_description: {
            text: 'step 2 description',
          },
          illustration_title: 'illustration 2 title',
          step_illustration: {
            alt: 'step 2 illustration',
            url: 'https://www.example.com/step_2_illustration.png',
          },
        },
      ],
    }
    const tree = renderer
      .create(<ThreeStepSlider input={data} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
