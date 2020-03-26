import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Paragraph.module.css';

class Paragraph extends React.Component {
  render() {
    return (
      <p className={styles.paragraph}
        style={{
          textAlign: this.props.textAlign
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