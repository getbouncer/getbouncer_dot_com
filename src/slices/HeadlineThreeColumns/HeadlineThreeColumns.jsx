import React from 'react'
import PropTypes from 'prop-types'
import Container from '~globals/Container'
import { Headline, Row, Item, Icon, ItemHeadline } from './styles'

const HeadlineThreeColumns = ({ input }) => {
  const { items, primary } = input

  return (
    <section>
      <Container>
        <Headline dangerouslySetInnerHTML={{ __html: primary.headline.html }} />
        <Row>
          {items.map(item => (
            <Item key={item.item_title}>
              <Icon src={item.item_image.url} alt={item.item_image.alt} />
              <ItemHeadline>{item.item_title}</ItemHeadline>
              <div dangerouslySetInnerHTML={{ __html: item.item_description.html }} />
            </Item>
          ))}
        </Row>
      </Container>
    </section>
  )
}

HeadlineThreeColumns.propTypes = {
  input: PropTypes.shape().isRequired,
}

export default HeadlineThreeColumns
