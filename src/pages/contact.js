import react from 'react';
import determineDefaultLang from '../languages/default_lang';

class Contact extends React.Component {
  constructor(props) {
    super(props);

    let lang = determineDefaultLang();

    this.state = {
    'lang': lang
    }
  }

  render() {
    return (
      <div></div>
    )
  }
}

export default Contact