import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Paragraph.module.css';

class Paragraph extends React.Component {
  constructor(props) {
    super(props)

    this.fontSizes = {
      's': 16,
      'm': 24,
      'l': 32
    }
  }
  render() {
    return (
      <p className={styles.paragraph}
        style={{
          textAlign: this.props.textAlign,
          fontSize: this.fontSizes[this.props.size.toLowerCase()]
        }}>
        {this.props.children}
      </p>
    )
  }
}

Paragraph.propTypes = {
  textAlign: PropTypes.string,
  size: PropTypes.string
};

Paragraph.defaultProps = {
  textAlign: 'center',
  size: 'm'
};

export default Paragraph;