import react from 'react';
import index_lang from '../languages/index_lang';
import determineDefaultLang from '../languages/default_lang';
import Button from '../components/Button';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Donut from '../components/Donut';
import Phone from '../components/Phone';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import ListItem from '../components/ListItem';
import List from '../components/List';
import Tile from '../components/Tile';



class Index extends React.Component {
  constructor(props) {
    super(props);

    let lang = determineDefaultLang();

    this.state = {
      'lang': lang
    }
  }

  /**
   * Contains special conditions for the second donut
   */
  componentDidMount() {
    var _this = this;
    var screen_size = '';

    if (window.innerWidth < 992) {
      _this.setState({
        s1_donut_x: 50,
        s1_phone_top: 550,
        s1_donut_top: 50,
        s3_donut_x: 50,
        s3_phone_x: 0,
        screen_state: 'Medium'
      });
    } else {
      _this.setState({
        s1_donut_x: 65,
        s1_phone_top: 480,
        s1_donut_top: 27,
        s3_donut_x: 20,
        s3_phone_x: 500,
        screen_state: 'Large'
      });
    }

    function _modifyPage() {
      if (window.innerWidth < 992 && _this.state.screen_state == 'Large') {
        _this.setState({
          s1_donut_x: 50,
          s1_phone_top: 550,
          s1_donut_top: 50,
          s3_donut_x: 50,
          s3_phone_x: 0,
          screen_state: 'Medium'
        });
      } else if (window.innerWidth >= 992 && _this.state.screen_state == 'Medium'){
        _this.setState({
          s1_donut_x: 65,
          s1_phone_top: 480,
          s1_donut_top: 27,
          s3_donut_x: 20,
          s3_phone_x: 500,
          screen_state: 'Large'
        });
      }
    }

    window.addEventListener('resize', _modifyPage);

    _modifyPage();
}

componentWillUnmount() {
    window.removeEventListener('resize');
}

render() {
  return (
    <div className="site-body">
      <NavigationBar></NavigationBar>
      <section className="section-one">
        <div className="row"
          style={{
            paddingBottom:30
          }}>
          <div className="col-lg-6 align-self-center pad-percent">
            <Header textAlign="left">
              {index_lang.section_one.header[this.state.lang]}
            </Header>
            <Paragraph textAlign="left">
              {index_lang.section_one.paragraph[this.state.lang]}
            </Paragraph>
            <Button action={() => window.location.href = "contact"}>
              {index_lang.contact[this.state.lang]}
            </Button>
          </div>
          <div className="col-lg-6 align-self-center pad-center">
            <Donut width={650} innerRadius={35} innerTop={this.state.s1_phone_top} x={this.state.s1_donut_x} y={this.state.s1_donut_top} colorid="first">
              <Phone width={300} src="/assets/images/input.gif"/>
            </Donut>
          </div>
        </div>
      </section>
      <section className="pad-center">
        <div className="tri-row">
          <div className="row pad-tile">
            <Header textAlign="center" size="l">{index_lang.section_two.header[this.state.lang]}</Header>
          </div>
          <div className="row">
            <div className="col-md-4 pad-middle pad-tile">
              <Tile source="/assets/images/icon-easy.svg" size={60}
              header = "Easy to use">
                {index_lang.section_two.ease[this.state.lang]}
              </Tile>
            </div>
            <div className="col-md-4 pad-middle pad-tile">
              <Tile source="/assets/images/icon-conversion.svg" size={60}
              header = "Higher Conversion">
                {index_lang.section_two.conversion[this.state.lang]}
              </Tile>
            </div>
            <div className="col-md-4 pad-middle pad-tile">
              <Tile source="/assets/images/icon-intuitive.svg" size={60}
              header = "Intuitive design">
                {index_lang.section_two.intuitive[this.state.lang]}
              </Tile>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="row">
          <div className="col-lg-6 align-self-center pad-center phone-align pad-tile">
            <Donut width={650} innerRadius={35} innerTop={400} x={this.state.s3_donut_x} gradientOrientation="100%" colorid="second">
              <Phone x={this.state.s3_phone_x} width={300} src="/assets/images/verify.gif"/>
            </Donut>
          </div>
          <div className="col-lg-6 align-self-center pad-percent"
            style={{
              flexDirection: 'column'
            }}>
            <Paragraph textAlign="left">
              Card Scan + Card Verify
            </Paragraph>
            <Header textAlign="left">
              {index_lang.section_three.header[this.state.lang]}
            </Header>
            <Paragraph textAlign="left">
              {index_lang.section_three.paragraph[this.state.lang]}
            </Paragraph>
            <List>
              <ListItem>
                {index_lang.section_three.list_item_one[this.state.lang]}
              </ListItem>
              <ListItem>
                {index_lang.section_three.list_item_two[this.state.lang]}
              </ListItem>
              <ListItem>
                {index_lang.section_three.list_item_three[this.state.lang]}
              </ListItem>
            </List>
            <Button action={() => window.location.href = "contact"}>
            {index_lang.contact[this.state.lang]}
            </Button>
          </div>
        </div>
      </section>
      <section>
        <div className="row">
          <div className="col-lg-6 align-self-center pad-percent">
            <Paragraph textAlign="left">
              <span className="text-blue"> {index_lang.section_four.soon[this.state.lang]} </span> &nbsp; ID Scan + ID Verify
            </Paragraph>
            <Paragraph textAlign="left">

            </Paragraph>
            <Header textAlign="left">
              {index_lang.section_four.header[this.state.lang]}
            </Header>
            <Paragraph textAlign="left">
              {index_lang.section_four.paragraph[this.state.lang]}
            </Paragraph>
          </div>
          <div className="col-lg-6 align-self-center pad-center">
            <Phone width={300}/>
          </div>
        </div>
      </section>
      <section className="pad-center" id="company" style={{
        paddingTop: 100
      }}>
        <div className="tri-row">
          <div className="row pad-center">
            <div className="pad-tile tri-row-header">
              <Header>
                {index_lang.section_five.header[this.state.lang]}
              </Header>
              <Paragraph>
                {index_lang.section_five.paragraph[this.state.lang]}
              </Paragraph>
            </div>
          </div>
          <div className="row" >
            <div className="pad-middle pad-tile profile-tile">
              <Tile avatar="yes" source="/assets/images/Will_Megson.jpeg"
              header="Will Megson"
              size={220}
              borderRadius="50%">
                {index_lang.section_five.tile_one[this.state.lang]}
              </Tile>
            </div>
            <div className="pad-middle pad-tile profile-tile">
              <Tile source="/assets/images/Sam_King.jpeg"
              header="Sam King"
              size={220}
              borderRadius="50%">
                {index_lang.section_five.tile_two[this.state.lang]}
              </Tile>
            </div>
            <div className="pad-middle pad-tile profile-tile">
              <Tile source="/assets/images/Steven_Liu.png"
              header="Steven Liu"
              size={220}
              borderRadius="50%">
                {index_lang.section_five.tile_three[this.state.lang]}
              </Tile>
            </div>
          </div>
        </div>
      </section>
      <section className="section-six">
        <div className="row">
          <div className="col-lg-12 align-self-center">
            <Donut width={1800} innerRadius={44} innerTop={520} gradientOrientation="100%" midColor="#19FFDD" colorid="third">
              <div className="donut-paragraph">
                <Header textAlign="center">
                  {index_lang.section_six.header[this.state.lang]}
                </Header>
                <Paragraph textAlign="center">
                  {index_lang.section_six.paragraph[this.state.lang]}
                </Paragraph>
                <div className="row">
                  <div className="col-sm-6 pad-center">
                    <Button action={() => window.location.href = "contact"}>
                      {index_lang.contact[this.state.lang]}
                    </Button>
                  </div>
                  <div className="col-sm-6 pad-center" style={{
                    padding: 20
                  }}>
                    <a href="https://join.slack.com/t/getbouncer/shared_invite/enQtNDY2MjAwNjI5NTc0LTQwMWQyOGY2ZjIzNGVhMjM0ZjA3YWQxOGViNDlmYmZlZWU2NzZjOTY3MTFiYzE5ZWRkMTRiM2U1N2NjYjg1ZmE">{index_lang.section_six.community[this.state.lang]}</a>
                  </div>
                </div>
              </div>
            </Donut>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
  }
}

export default Index;
