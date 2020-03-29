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
  render() {
    return (

      <div>

        <NavigationBar> </NavigationBar>

        <Header textAlign="center">
          This is a header
        </Header>
        <Paragraph>
          This is a very long paragraph that contains a lot of information and lists it all out for the user to be able to see.
            </Paragraph>
          <List>   This is a list
            <ListItem> A list item </ListItem>
            <ListItem> Another list item </ListItem>

          </List>

        <Donut>
          <Phone x={-95} y={110} width={300}/>
        </Donut>
        <Donut innerRadius={50} outerRadius={75}>
          <Header> Text </Header>
          <Paragraph>  Ya yeet is paragraph  </Paragraph>
        </Donut>

        <Tile
          source="/assets/images/icon-easy.svg"
          header = "header of tile"
          paragraph ="I am the paragraph of the tile"
        > </Tile>


        <section>
          <div>
            <Header textAlign="left">
              Saving good users from frausters with cutting-edge technology
            </Header>
          </div>
        </section>
        <Footer>

        </Footer>
      </div>
    )
  }
}

export default Index;
