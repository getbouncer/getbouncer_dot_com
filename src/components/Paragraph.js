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
  textAlign: PropTypes.string
};

export default Paragraph;