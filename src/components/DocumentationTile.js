import React from 'react';
import determineDefaultLang from '../languages/default_lang';
import documentation_lang from '../languages/documentation_lang';


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
      <div>
      <p> {this.state.header} </p>
      <a href={this.state.link}>
      {documentation_lang.github[this.state.lang]}
      </a>
      </div>
    )
  }

}
export default DocumentationTile;
