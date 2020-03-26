import Button from '../../components/Button';
import Header from '../../components/Header';
import Paragraph from '../../components/Paragraph';
import Donut from '../../components/Donut';
import Phone from '../../components/Phone';
import styles from '../../styles/Phone.module.css';

class SectionOne extends React.Component {
    render() {
        return (
            <section style={{
                padding: 32,
                overflow: 'hidden',
                width: '100%',
                paddingTop: 100,
                paddingBottom: 200
            }}>
                <div className="row">
                    <div className="col-lg-6 align-self-center"
                        style={{
                            padding: 16,
                            padding: 100
                        }}>
                        <Header textAlign="left">
                            Saving good users from frausters with cutting-edge technology
                        </Header>
                        <Paragraph textAlign="left">
                            Lorem ipsum dolor sit amet, vel quando graece ea. Ius idque affert alterum te. Vix reprimique interesset ex. No possim iisque eum, prima zril quaeque cum te. Vel ut habeo dolorem accommodare, illum libris consequat in eam. Pro repudiare splendide cu.
                        </Paragraph>
                        <Button>
                            Contact Us
                        </Button>
                    </div>
                    <div className="col-lg-6 align-self-center"
                        style={{
                            padding: 16,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <Donut y={45}>
                            <Phone x={-95} y={110} width={300}/>
                        </Donut>
                    </div>
                </div>
            </section>
        )
    }
}

export default SectionOne;