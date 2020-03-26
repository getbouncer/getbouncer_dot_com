import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Button.module.css';

class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.action}
        className={styles.btn}
        style={{
          backgroundColor: this.props.backgroundColor,
          color: this.props.color
        }}>
        {this.props.children}
      </button>
    )
  }
}

Button.propTypes = {
  action: PropTypes.func,
  color: PropTypes.string,
  backgroundColor: PropTypes.string
};

Button.defaultProps = {
  action: () => {console.log('Action')},
  color: 'white',
  backgroundColor: '#3333FF'
}

export default Button;