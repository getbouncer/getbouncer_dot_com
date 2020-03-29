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
import SectionOne from './sections (temporary)/section_one';
import SectionSix from './sections (temporary)/section_six';
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
        <SectionOne></SectionOne>
        <SectionSix></SectionSix>
        <List>   This is a list
          <ListItem> A list item </ListItem>
          <ListItem> Another list item </ListItem>

          <Tile
            source="/assets/images/icon-easy.svg"
            header = "header of tile"
            paragraph ="I am the paragraph of the tile"
          > </Tile>

        <Footer>

        </Footer>
      </div>
    )
  }
}

export default Index;
