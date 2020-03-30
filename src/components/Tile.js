import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import styles from '../styles/Tile.module.css';

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      source: this.props.source,
      header: this.props.header,
      paragraph: this.props.paragraph
    }
  }
  render() {
    return (
            <div className={styles.tileContainer}>
            <img className={styles.icon} src={this.state.source}/>
            <Header className={styles.headerContainer}>{this.state.header} </Header>
            <Paragraph>{this.state.paragraph} </Paragraph>
            </div>

    )
  }
}

export default Tile;
