import React from 'react'
import PropTypes from 'prop-types'
import Container from '~globals/Container'
import CtaButton from '~components/CtaButton'
import { SectionContainer, Headline, Item, ItemImage, ItemIcon, ItemContent, ItemHeadline, ItemText } from './styles'

const HomeProducts = ({ input }) => {
  const productNodes = input.items

  return (
    <SectionContainer>
      <Container>
        <Headline dangerouslySetInnerHTML={{ __html: input.primary.products_headline.html }} />
        <ul>
          {productNodes.map(product => {
            const productItem = product.products.document.data
            return (
              <Item key={product.products.document.uid}>
                <ItemImage src={productItem.product_image_home.url} alt={productItem.product_image_home.alt} />
                <ItemContent>
                  <ItemIcon src={productItem.product_logo.url} alt={productItem.product_logo.alt} />
                  <ItemHeadline dangerouslySetInnerHTML={{ __html: productItem.product_headline_home.html }} />
                  <ItemText dangerouslySetInnerHTML={{ __html: productItem.product_description_home.html }} />
                  <CtaButton text={productItem.product_cta_home} to={`/${product.products.document.uid}`} />
                </ItemContent>
              </Item>
            )
          })}
        </ul>
      </Container>
    </SectionContainer>
  )
}

HomeProducts.propTypes = {
  input: PropTypes.shape().isRequired,
}

export default HomeProducts
