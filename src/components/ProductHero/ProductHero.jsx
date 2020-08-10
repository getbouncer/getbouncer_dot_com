import React from 'react'
import PropTypes from 'prop-types'
import Container from '~globals/Container'
import CtaButton from '~components/CtaButton'
import { InnerContainer, Image, ProductLogo, Headline, CtaContainer } from './styles'

const ProductHero = ({ data }) => {
  const {
    product_cta: productCta,
    product_cta_link: productCtaLink,
    product_headline: productHeadline,
    product_image: productImage,
    product_logo: productLogo,
  } = data

  return (
    <Container>
      <InnerContainer>
        <Image src={productImage.url} alt={productImage.alt} />
        <div>
          <ProductLogo src={productLogo.url} alt={productLogo.alt} />
          <Headline dangerouslySetInnerHTML={{ __html: productHeadline.html }} />
          {productCta && (
            <CtaContainer>
              <CtaButton isInternal to={productCtaLink} text={productCta} />
            </CtaContainer>
          )}
        </div>
      </InnerContainer>
    </Container>
  )
}

ProductHero.propTypes = {
  data: PropTypes.shape().isRequired,
}

export default ProductHero
