import React from 'react'
import PropTypes from 'prop-types'
import { Content, Grid, Item, Icon, Illustration, ItemTitle, Headline, Wrapper } from './styles'
import Container from '~globals/Container'

const HeadlineListIllustration = ({ input }) => {
  const { items, primary } = input

  return (
    <Container>
      <Wrapper>
        <Headline dangerouslySetInnerHTML={{ __html: primary.headline.html }} />
        <Content>
          <Grid>
            {items.map(item => (
              <Item key={item.item_title}>
                <Icon src={item.item_icon.url} alt={item.item_icon.alt} />
                <ItemTitle>{item.item_title}</ItemTitle>
                <div dangerouslySetInnerHTML={{ __html: item.item_description.html }} />
              </Item>
            ))}
          </Grid>
          <Illustration src={primary.illustration.url} alt={primary.illustration.alt} />
        </Content>
      </Wrapper>
    </Container>
  )
}

HeadlineListIllustration.propTypes = {
  input: PropTypes.shape().isRequired,
}

export default HeadlineListIllustration
