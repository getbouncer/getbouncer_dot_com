import React from 'react';
import determineDefaultLang from '../languages/default_lang';
import documentation_lang from '../languages/documentation_lang';
import styles from '../styles/Documentation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class DocumentationTile extends React.Component {
  constructor(props) {
    super(props);

    let lang = determineDefaultLang();

    this.state = {
    'lang': lang,
    link: this.props.link,
    header: this.props.header,
    iconType: this.props.iconType,
    }

  }

  render() {
    return (
      <div className={styles.docTile}>
      <a  className={styles.linkStyle}
        href={this.state.link}>
        <FontAwesomeIcon icon={this.state.iconType} size='4x' className={styles.icon}></FontAwesomeIcon>
      <p className={styles.integrationTitle}> {this.state.header} </p>
      <hr></hr>
      <p className={styles.viewGuide}> {documentation_lang.github[this.state.lang]} </p>
      </a>
      </div>
    )
  }

}
export default DocumentationTile;
