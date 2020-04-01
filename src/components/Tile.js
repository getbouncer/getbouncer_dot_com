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
    }
  }
  render() {
    return (
            <div className={styles.tileContainer}>
            <img className={styles.icon}
            src={this.state.source}
            style={{
              borderRadius: this.props.borderRadius,
              height: this.props.size}}
              />
            <Header className={styles.headerContainer} size="m">{this.state.header} </Header>
            <Paragraph>{this.props.children} </Paragraph>
            </div>

    )
  }
}

Tile.propTypes = {
  size: PropTypes.number,
  source: PropTypes.string,
  header: PropTypes.string,
  borderRadius: PropTypes.PropTypes.string
}

Tile.defaultProps = {
  size: 100,
  source: '/assets/images/icon-easy.svg',
  header: 'Header',
  borderRadius: "0%"
};

export default Tile;
