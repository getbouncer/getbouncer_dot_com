import react from 'react';
import documentation_lang from '../languages/documentation_lang';
import determineDefaultLang from '../languages/default_lang';
import styles from '../styles/Documentation.module.css';
import NavigationBar from '../components/NavigationBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple } from '@fortawesome/free-brands-svg-icons'
import { faAndroid } from '@fortawesome/free-brands-svg-icons'
import Header from '../components/Header';
import DocumentationTile from '../components/DocumentationTile';

class Documentation extends React.Component {
  constructor(props) {
    super(props);

    let lang = determineDefaultLang();

    this.state = {
    'lang': lang
    }
  }

  render() {
    return (
      <div>
        <NavigationBar></NavigationBar>

        <section className={styles.title}>
        <Header textAlign="center" size="l"> {documentation_lang.title[this.state.lang]}</Header>
        </section>

        <section className={styles.guides}>
          <DocumentationTile className={styles.icon}  iconType={faApple}
            link="https://github.com/getbouncer/cardscan-ios" header={documentation_lang.apple[this.state.lang]}>

            </DocumentationTile>


            <DocumentationTile className={styles.icon} iconType={faAndroid}
            link="https://github.com/getbouncer/cardscan-demo-android" header={documentation_lang.android[this.state.lang]}>

            </DocumentationTile>
        </section>

      </div>
    )
  }

}

export default Documentation
