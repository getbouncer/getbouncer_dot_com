import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Phone.module.css';

class Phone extends React.Component {
  render() {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        marginTop: this.props.y,
        marginLeft: this.props.x
      }}>
      <div style={{
          width: this.props.width,
          height: 1.997 * this.props.width
        }}>
        <div className={styles.phone}
          style={{
            width: this.props.width * 0.8,
            height: 1.997 * this.props.width * 0.8,
            left: this.props.width * 0.1,
            top: this.props.width * 0.17,
            position: 'absolute'
          }}>

        </div>
        <img style={{
              width: this.props.width,
              left: 0,
              top: 0,
              position: 'absolute'
            }}
            src="/assets/images/phone.svg"/>
        <img
          style={{
            width: this.props.width * 0.82,
            left: this.props.width * 0.09,
            top: this.props.width * 0.17,
            position: 'absolute'
          }}
          alt="Coming Soon!"
          src={this.props.src}/>
      </div>
    </div>
    )
  }
}

Phone.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  src: PropTypes.string
}

Phone.defaultProps = {
  x: 0,
  y: 0,
  width: 300,
  src: "/assets/images/verify.gif"
};

export default Phone;