import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Container from '~globals/Container'
import CtaButton from '~components/CtaButton'
import { AboveSmartphone, Smartphone } from '~components/Media'
import {
  Burger,
  BurgerContainer,
  BurgerWrap,
  CtaContainer,
  DropdownItem,
  FlexContainer,
  InnerContainer,
  LogoItem,
  MobileLogo,
  MobileMenu,
  NavList,
  ProductLink,
  ProductList,
  ProductSubMenu,
  Text,
} from './styles'
import arrowDown from '~images/arrow-down.svg'

const Header = ({ location }) => {
  const [activeBurger, setActiveBurger] = useState(false)
  const [showProductsMobile, setShowProductsMobile] = useState(false)

  const data = useStaticQuery(graphql`
    query HeaderQuery {
      products: allPrismicProduct {
        edges {
          node {
            id
            uid
            data {
              product_logo {
                url
                alt
              }
              product_headline_home {
                text
              }
            }
          }
        }
      }

      prismicGlobals {
        data {
          cta_button
          products_menu
          pricing_menu
          resources_menu
          logo {
            alt
            url
          }
          documentation_link {
            url
          }
        }
      }
    }
  `)

  const {
    cta_button: buttonText,
    documentation_link: documentationLink,
    logo,
    pricing_menu: pricingMenu,
    products_menu: productsMenu,
    resources_menu: resourcesMenu,
  } = data.prismicGlobals.data

  const products = data.products.edges

  useEffect(() => {
    setActiveBurger(false)
  }, [location])

  return (
    <header>
      <Container isLarge>
        <AboveSmartphone>
          <InnerContainer>
            <Link to="/">
              <img src={logo.url} alt={logo.alt} />
            </Link>
            <NavList>
              <DropdownItem>
                <span>{productsMenu}</span>
                <img src={arrowDown} alt="Arrow down icon" />
                <ProductSubMenu>
                  <ProductList>
                    {products.map(product => (
                      <li key={product.node.id}>
                        <div>
                          <LogoItem src={product.node.data.product_logo.url} alt={product.node.data.product_logo.alt} />
                          <Text>{product.node.data.product_headline_home.text}</Text>
                        </div>
                        <ProductLink to={`/${product.node.uid}`} />
                      </li>
                    ))}
                  </ProductList>
                </ProductSubMenu>
              </DropdownItem>
              <li>
                <Link to="/pricing">{pricingMenu}</Link>
              </li>
              <li>
                <a href={documentationLink.url}>{resourcesMenu}</a>
              </li>
            </NavList>
            <CtaContainer>
              <CtaButton to="/contact" text={buttonText} />
            </CtaContainer>
          </InnerContainer>
        </AboveSmartphone>
      </Container>
      <Smartphone>
        <BurgerContainer>
          <BurgerWrap>
            <Burger className={activeBurger ? 'active' : null} onClick={() => setActiveBurger(!activeBurger)}>
              <span />
              <span />
              <span />
            </Burger>
          </BurgerWrap>
          <MobileMenu className={activeBurger ? 'open' : null}>
            <NavList>
              <DropdownItem
                className={showProductsMobile ? 'active' : null}
                onClick={() => setShowProductsMobile(!showProductsMobile)}
              >
                <FlexContainer>
                  <span>{productsMenu}</span>
                  <img src={arrowDown} alt="Arrow down icon" />
                </FlexContainer>
                <ProductSubMenu>
                  <ProductList>
                    {products.map(product => (
                      <li key={product.node.id}>
                        <div>
                          <LogoItem src={product.node.data.product_logo.url} alt={product.node.data.product_logo.alt} />
                          <Text>{product.node.data.product_headline_home.text}</Text>
                        </div>
                        <ProductLink to={`/${product.node.uid}`} />
                      </li>
                    ))}
                  </ProductList>
                </ProductSubMenu>
              </DropdownItem>
              <li>
                <Link to="/pricing">{pricingMenu}</Link>
              </li>
              <li>
                <a href={documentationLink.url}>{resourcesMenu}</a>
              </li>
            </NavList>
          </MobileMenu>
          <Link to="/">
            <MobileLogo src={logo.url} alt={logo.alt} />
          </Link>
        </BurgerContainer>
      </Smartphone>
    </header>
  )
}

Header.propTypes = {
  location: PropTypes.shape().isRequired,
}

export default Header
