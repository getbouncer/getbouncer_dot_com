import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { LogosList, Logo } from './styles'

const CompaniesLogos = () => {
  const data = useStaticQuery(graphql`
    query LogosQuery {
      prismicGlobals {
        data {
          companies_logo {
            company_logo {
              alt
              url
            }
          }
        }
      }
    }
  `)
  const { companies_logo: companiesLogos } = data.prismicGlobals.data

  return (
    <LogosList>
      {companiesLogos.map(item => (
        <Logo key={item.company_logo.url}>
          <img src={item.company_logo.url} alt={item.company_logo.alt} />
        </Logo>
      ))}
    </LogosList>
  )
}

export default CompaniesLogos
