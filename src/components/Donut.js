import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Donut.module.css';

class Donut extends React.Component {
  render() {
    return(
      <div className={styles.donut}
        style={{
          width: this.props.width
        }}>
        <svg width={this.props.width} viewBox={`0 0 100 100`} xmlns="http://www.w3.org/2000/svg" overflow="visible">
          <defs>
            <linearGradient id="blue-green"
              x1="0%" y1="100%" x2="100%" y2="0%" gradientTransform={`rotate(${this.props.rotation})`}>
              <stop offset="0%" stopColor={this.props.startColor} />
              <stop offset="50%" stopColor={this.props.midColor} />
              <stop offset="100%" stopColor={this.props.endColor} />
            </linearGradient>
          </defs>
          
          <circle cx={this.props.x} cy={this.props.y} r={this.props.outerRadius} fill="url('#blue-green')" />
          <circle cx={this.props.x} cy={this.props.y} r={this.props.innerRadius} fill="white" />
        </svg>
        <div className={styles.content}
          style={{
            paddingLeft: 0,
            paddingRight: 0,
            top: -this.props.width,
            left: this.props.width / 2
          }}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

Donut.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  outerRadius: PropTypes.number,
  innerRadius: PropTypes.number,
  startColor: PropTypes.string,
  midColor: PropTypes.string,
  endColor: PropTypes.string,
  rotation: PropTypes.number,
  width: PropTypes.number,
}

Donut.defaultProps = {
  x: 50,
  y: 50,
  outerRadius: 50,
  innerRadius: 30,
  startColor: '#13FF9A',
  midColor: '#2FDAFF',
  endColor: '#3120FF',
  rotation: 0,
  width: 700
};

export default Donut;