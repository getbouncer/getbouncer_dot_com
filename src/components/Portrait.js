import React from 'react';
import styles from '../styles/Portrait.module.css';

class Portrait extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      source: this.props.source,
    }
  }
  render() {
    return (
      <div>
      <img className={styles.pic} src={this.state.source}/>
      </div>
    )
  }
}

export default Portrait;
