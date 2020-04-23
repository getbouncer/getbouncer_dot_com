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
      <a href={this.state.link}>
        <FontAwesomeIcon icon={this.state.iconType} size='2x' className={styles.icon}></FontAwesomeIcon>
      <p> {this.state.header} </p>

      <p> {documentation_lang.github[this.state.lang]} </p>
      </a>
      </div>
    )
  }

}
export default DocumentationTile;
