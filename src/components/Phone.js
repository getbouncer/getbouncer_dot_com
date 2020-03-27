import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Phone.module.css';

class Phone extends React.Component {
  render() {
    return (
      <div className={styles.phone}
        style={{
          width: this.props.width,
          left: this.props.x,
          top: this.props.y
        }}>
        <img className={styles.phone}
          style={{
            width: this.props.width
          }}
          src="/assets/images/phone.svg"/>
        <video autoPlay
          className={styles.phone}
          style={{
            marginLeft: this.props.width * 0.1,
            marginTop: this.props.width * 0.18,
            width: this.props.width * 0.8
          }}
          src={this.props.src}/>
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
  src: "/assets/videos/demo.mp4"
};

export default Phone;