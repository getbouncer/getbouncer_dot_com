import react from 'react';
import determineDefaultLang from '../languages/default_lang';
import NavigationBar from '../components/NavigationBar';

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
      <div>
        <NavigationBar></NavigationBar>
        <div style={{
          width: "calc(100vw)",
          height: "calc(100vh - 120px)",
          marginTop: 70,
          border: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 62
        }}>
          We couldn't find your page ...
        </div>
      </div>
      
    )
  }
}

export default Contact