import react from 'react';
import index_lang from '../languages/index_lang';
import determineDefaultLang from '../languages/default_lang';
import Button from '../components/Button';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Donut from '../components/Donut';
import Phone from '../components/Phone';

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
        {index_lang.title[this.state.lang]}
        <Button action={() => console.log("Button Press!")}>
          Press me!
        </Button>
        <Header textAlign="center">
          This is a header
        </Header>
        <Paragraph>
          This is a very long paragraph that contains a lot of information and lists it all out for the user to be able to see.
        </Paragraph>
        <Donut>
          <Phone x={-300} y={110} width={300}/>
        </Donut>
      </div>
    )
  }
}

export default Index;