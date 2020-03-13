import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Header.module.css';

class Header extends React.Component {
  render() {
    return (
      <h1 className={styles.header}
        style={{
          textAlign: this.props.textAlign
        }}>
        {this.props.children}
      </h1>
    );
  }
}

Header.propTypes = {
  textAlign: PropTypes.string
};

export default Header;