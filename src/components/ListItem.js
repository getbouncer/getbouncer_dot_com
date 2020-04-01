import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/ListItem.module.css';

class ListItem extends React.Component {
  render() {
    return(
      <React.Fragment>

      <li className={styles.listitem}><FontAwesomeIcon icon={faCheckCircle} size='lg' className={styles.checkicon}></FontAwesomeIcon>{this.props.children} </li>
      </React.Fragment>
    )
  }
}



export default ListItem;
