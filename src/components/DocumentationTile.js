import React from 'react';
import determineDefaultLang from '../languages/default_lang';
import documentation_lang from '../languages/documentation_lang';
import styles from '../styles/Documentation.module.css';

class DocumentationTile extends React.Component {
  constructor(props) {
    super(props);

    let lang = determineDefaultLang();

    this.state = {
    'lang': lang,
    link: this.props.link,
    header: this.props.header,
    }

  }

  render() {
    return (
      <div className={styles.docTile}>
      <a href={this.state.link}>
      <p> {this.state.header} </p>

      <p> {documentation_lang.github[this.state.lang]} </p>
      </a>
      </div>
    )
  }

}
export default DocumentationTile;
