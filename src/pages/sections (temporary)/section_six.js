import Button from '../../components/Button';
import Header from '../../components/Header';
import Paragraph from '../../components/Paragraph';
import Donut from '../../components/Donut';

class SectionSix extends React.Component {
    render() {
        return (
            <section className="section-six">
                <Donut width={1600} innerRadius={40} innerTop={-400}>
                    <div style={{
                        maxWidth: '100vw',
                        width: 500
                    }}>
                        <Header textAlign="center">
                            Get Started Today
                        </Header>
                        <Paragraph textAlign="center">
                            Contact us to get started and increase your payment security and conversion.
                        </Paragraph>
                        <div className="row">
                            <div className="col-sm-6 pad-center">
                                <Button>
                                    Contact Us
                                </Button> 
                            </div>
                            <div className="col-sm-6 pad-center">
                                <a>Join Community</a>
                            </div>
                        </div>
                          
                    </div>
                </Donut>
            </section>
        )
    }
}

export default SectionSix;