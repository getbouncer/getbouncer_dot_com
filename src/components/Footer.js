import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Paragraph.module.css';

/**
 * Need column before I can continue with this one
 * Will define props which will be separated into columns
 */
class Footer extends React.Component {
  render() {
    return (
      <div className={styles.footer}>
        
      </div>
    )
  }
}

Footer.propTypes = {
  fbLink: PropTypes.string,
  twLink: PropTypes.string,
  copyright: PropTypes.string,
  policy: PropTypes.string
};

export default Footer;