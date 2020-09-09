import React from 'react'
import PropTypes from 'prop-types'
import { LogosList, Logo } from './styles'

const CompaniesLogos = ({ logos }) => {
  const { companies_logo: companiesLogos } = logos

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

CompaniesLogos.propTypes = {
  logos: PropTypes.shape().isRequired,
}

export default CompaniesLogos
