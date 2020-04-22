import react from 'react';
import privacy_lang from '../languages/privacy_lang';
import determineDefaultLang from '../languages/default_lang';
import NavigationBar from '../components/NavigationBar';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';

class Privacy extends React.Component {
  constructor(props) {
    super(props);

    let lang = determineDefaultLang();

    this.state = {
      'lang': lang
    }
  }

  render() {
    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 80,
      }}>
        <NavigationBar></NavigationBar>
        <div style={{
          maxWidth: 800
        }}>
          <section>
            <Header size="l">{privacy_lang.prologue.title[this.state.lang]}</Header>
            <Paragraph textAlign="left">{privacy_lang.prologue.p1[this.state.lang]}</Paragraph>
            <Paragraph textAlign="left">{privacy_lang.prologue.p2[this.state.lang]}</Paragraph>
            <Paragraph textAlign="left">{privacy_lang.prologue.p3[this.state.lang]}</Paragraph>
            <ul>
              <li>{privacy_lang.prologue.l1[this.state.lang]}</li>
              <li>{privacy_lang.prologue.l2[this.state.lang]}</li>
              <li>{privacy_lang.prologue.l3[this.state.lang]}</li>
              <li>{privacy_lang.prologue.l4[this.state.lang]}</li>
              <li>{privacy_lang.prologue.l5[this.state.lang]}</li>
              <li>{privacy_lang.prologue.l6[this.state.lang]}</li>
              <li>{privacy_lang.prologue.l7[this.state.lang]}</li>
              <li>{privacy_lang.prologue.l8[this.state.lang]}</li>
            </ul>
          </section>
          <section>
            <Header size="l">{privacy_lang.section_one.title[this.state.lang]}</Header>
            <Paragraph textAlign="left">{privacy_lang.section_one.p1[this.state.lang]}</Paragraph>
            <Paragraph textAlign="left">{privacy_lang.section_one.p2[this.state.lang]}</Paragraph>
            <Paragraph textAlign="left">{privacy_lang.section_one.p2[this.state.lang]}</Paragraph>
          </section>
          <section>
            <Header size="l">{privacy_lang.section_two.title[this.state.lang]}</Header>
            <Paragraph textAlign="left">{privacy_lang.section_two.p1[this.state.lang]}</Paragraph>
            <Header textAlign="left" textAlign="left" size="m">{privacy_lang.section_two.h1[this.state.lang]}</Header>
            <Paragraph textAlign="left">{privacy_lang.section_two.p2[this.state.lang]}</Paragraph>
            <ul>
              <li>{privacy_lang.section_two.l1[this.state.lang]}</li>
              <li>{privacy_lang.section_two.l2[this.state.lang]}</li>
              <li>{privacy_lang.section_two.l3[this.state.lang]}</li>
              <li>{privacy_lang.section_two.l4[this.state.lang]}</li>
            </ul>
            <Header textAlign="left" size="m">{privacy_lang.section_two.h2[this.state.lang]}</Header>
            <Paragraph textAlign="left">{privacy_lang.section_two.p3[this.state.lang]}</Paragraph>
            <Paragraph textAlign="left">{privacy_lang.section_two.p4[this.state.lang]}
              <a href="http://www.networkadvertising.org/managing/opt_out.asp">http://www.networkadvertising.org/managing/opt_out.asp</a>
              {privacy_lang.section_two.p4_2[this.state.lang]}
              <a href="http://www.aboutads.info/">http://www.aboutads.info/</a></Paragraph>
            <Paragraph textAlign="left">{privacy_lang.section_two.p5[this.state.lang]}</Paragraph>
            <Paragraph textAlign="left">{privacy_lang.section_two.p6[this.state.lang]}</Paragraph>
            <Paragraph textAlign="left">{privacy_lang.section_two.p7[this.state.lang]}</Paragraph>
            <Header textAlign="left" size="m">{privacy_lang.section_two.h3[this.state.lang]}</Header>
            <Paragraph textAlign="left">{privacy_lang.section_two.p8[this.state.lang]}</Paragraph>
            <Header textAlign="left" size="m">{privacy_lang.section_two.h4[this.state.lang]}</Header>
            <Paragraph textAlign="left">{privacy_lang.section_two.p9[this.state.lang]}</Paragraph>
            <Header textAlign="left" size="m">{privacy_lang.section_two.h5[this.state.lang]}</Header>
            <Paragraph textAlign="left">{privacy_lang.section_two.p10[this.state.lang]}</Paragraph>
            <Paragraph textAlign="left">{privacy_lang.section_two.p11[this.state.lang]}</Paragraph>
          </section>
          <section>
            <Header size="l">{privacy_lang.section_three.title[this.state.lang]}</Header>
            <Paragraph textAlign="left">{privacy_lang.section_three.p1[this.state.lang]}</Paragraph>
            <Paragraph textAlign="left">{privacy_lang.section_three.p2[this.state.lang]}</Paragraph>
            <Paragraph textAlign="left">{privacy_lang.section_three.p3[this.state.lang]}</Paragraph>
          </section>
          <section>
            <Header size="l">{privacy_lang.section_four.title[this.state.lang]}</Header>
            <Paragraph textAlign="left">{privacy_lang.section_four.p1[this.state.lang]}</Paragraph>
          </section>
          <section>
            <Header size="l">{privacy_lang.section_five.title[this.state.lang]}</Header>
            <Paragraph textAlign="left">{privacy_lang.section_five.p1[this.state.lang]}</Paragraph>
          </section>
          <section>
            <Header size="l">{privacy_lang.section_six.title[this.state.lang]}</Header>
            <Paragraph textAlign="left">{privacy_lang.section_six.p1[this.state.lang]}</Paragraph>
          </section>
          <section>
            <Header size="l">{privacy_lang.section_seven.title[this.state.lang]}</Header>
            <Paragraph textAlign="left">{privacy_lang.section_seven.p1[this.state.lang]}</Paragraph>
          </section>
          <section>
            <Header size="l">{privacy_lang.section_eight.title[this.state.lang]}</Header>
            <Paragraph textAlign="left">{privacy_lang.section_eight.p1[this.state.lang]}</Paragraph>
            <Paragraph textAlign="left">{privacy_lang.section_eight.p2[this.state.lang]}</Paragraph>
          </section>
        </div>
      </div>
      
    )
  }
}

export default Privacy