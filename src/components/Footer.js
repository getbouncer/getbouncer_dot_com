import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faSlack } from '@fortawesome/free-brands-svg-icons'

/**
 * Need column before I can continue with this one
 * Will define props which will be separated into columns
 */
class Footer extends React.Component {
  render() {
    return (
      <div className={styles.footer}>
        <div className={styles.links}>
          <a href="privacy">Privacy Policy</a>
        </div>
        <div>
          <a href="https://www.linkedin.com/company/getbouncer/"><FontAwesomeIcon icon={faLinkedin} size='2x' className={styles.icon}></FontAwesomeIcon></a>
          <a href="https://join.slack.com/t/getbouncer/shared_invite/enQtNDY2MjAwNjI5NTc0LTQwMWQyOGY2ZjIzNGVhMjM0ZjA3YWQxOGViNDlmYmZlZWU2NzZjOTY3MTFiYzE5ZWRkMTRiM2U1N2NjYjg1ZmE"><FontAwesomeIcon icon={faSlack} size='2x' className={styles.icon}></FontAwesomeIcon></a>
        </div>
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
