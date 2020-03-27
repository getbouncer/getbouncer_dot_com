import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import ListItem from '../components/ListItem';
import styles from '../styles/List.module.css';

class List extends React.Component {
  render() {
    return (
      <ul className={styles.list}>{this.props.children} </ul>
    )
  }
}

export default List;
