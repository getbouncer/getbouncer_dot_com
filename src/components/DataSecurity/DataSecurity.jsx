import React from 'react'
import { css } from '@emotion/core'
import { breakpoints } from '~styles'
import { Icon, Headline, Text } from './styles'
import dataIcon from '~images/icon-data.svg'
import dataBg from '~images/bg-data.png'

const DataSecurity = () => {
  const backgroundStyles = css`
    background-image: url(${dataBg});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
    padding: 120px 0;
    text-align: center;

    @media ${breakpoints.smartphone} {
      padding: 60px 32px 68px;
    }
  `

  return (
    <section css={backgroundStyles}>
      <Icon src={dataIcon} alt="Data icon" />
      <Headline>Data handling and security</Headline>
      <Text>
        Bouncer Card is designed to keep user data safe and secure, and separates PCI data handling outside of Bouncer’s
        servers. We do analysis locally on the user’s mobile phone, and send back a subset of model output data that is
        stripped of image and PAN. This approach is PCI and GDPR ready.
      </Text>
    </section>
  )
}

export default DataSecurity
