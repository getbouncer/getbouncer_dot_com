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

  componentDidMount() {
    var _this = this;

    if (window.innerWidth > 992) {
      _this.setState({
        padding: 15
      });
    } else {
      _this.setState({
        padding: 0
      });
    }

    function _modifyPage() {
      if (window.innerWidth > 992) {
        _this.setState({
          padding: 15
        });
      } else {
        _this.setState({
          padding: 0
        });
      }
    }

    window.addEventListener('resize', _modifyPage);

    _modifyPage();
}


  render() {
    return (
      <div>
        <NavigationBar></NavigationBar>
        <iframe src="https://willmegson795569.typeform.com/to/g6NfJz" style={{
          width: "calc(100vw)",
          height: "calc(100vh - 120px)",
          marginTop: 70,
          paddingTop: `${this.state.padding}vh`,
          paddingBottom: `${this.state.padding}vh`,
          paddingLeft: `${this.state.padding}vw`,
          paddingRight: `${this.state.padding}vw`,
          border: "none"
        }}></iframe>
      </div>
      
    )
  }
}

export default Contact