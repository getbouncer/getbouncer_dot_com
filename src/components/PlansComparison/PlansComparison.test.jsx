import React from 'react'
import renderer from 'react-test-renderer'
import { describe, expect, it } from 'jest'
import PlansComparison from './PlansComparison'

describe('PlansComparison', () => {
  it('renders correctly', () => {
    const data = {
      headline: {
        text: 'headline',
      },
      comparison_headline: {
        text: 'comparison headline',
      },
      text: {
        text: 'text',
      },
      body: [
        {
          id: 'id 1',
          primary: {
            tier_link_internal: 'https://www.example.com/tier_1',
            tier_link: 'https://www.example.com/tier_1',
            tier_cta: 'tier 1 cta',
            tier_description: 'tier 1 description',
            tier_name: 'tier 1',
            tier_short_description: 'tier 1 short description',
            tier_price: 'tier 1 price',
          },
          items: [
            {
              tier_feature: 'tier 1 feature',
            },
            {
              tier_feature: 'tier 1 feature',
            },
          ],
        },
        {
          id: 'id 2',
          primary: {
            tier_link_internal: 'https://www.example.com/tier_2',
            tier_link: 'https://www.example.com/tier_2',
            tier_cta: 'tier 2 cta',
            tier_description: 'tier 2 description',
            tier_name: 'tier 2',
            tier_short_description: 'tier 2 short description',
            tier_price: 'tier 2 price',
          },
          items: [
            {
              tier_feature: 'tier 2 feature',
            },
            {
              tier_feature: 'tier 2 feature',
            },
          ],
        },
      ],
    }
    const tree = renderer
      .create(<PlansComparison data={data} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
