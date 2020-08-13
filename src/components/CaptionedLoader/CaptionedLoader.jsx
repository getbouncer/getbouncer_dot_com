import React from 'react'
import PropTypes from 'prop-types'
import Loader from 'react-loader-spinner'
import { theme } from '~styles'
import { CenteredDialog, CenteredColumn, VerticalSplitter } from '~styles/global'

const CaptionedLoader = ({ text, type }) => (
  <CenteredDialog>
    <CenteredColumn>
      <Loader type={type} color={theme.colors.blue} height={80} width={80} padding={20} />
      <VerticalSplitter />
      <div>
        { text }
      </div>
    </CenteredColumn>
  </CenteredDialog>
)

CaptionedLoader.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
}

CaptionedLoader.defaultProps = {
  text: '',
  type: 'TailSpin',
}

export default CaptionedLoader
