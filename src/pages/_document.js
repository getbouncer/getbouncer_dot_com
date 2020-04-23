import Document, { Html, Head, Main, NextScript } from 'next/document'
import { config } from '@fortawesome/fontawesome-svg-core'

config.autoAddCss = false;

class MainDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
        <Html>
            <Head>
                { this.props.head }
                <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel='stylesheet' href='https://unpkg.com/@fortawesome/fontawesome-svg-core@1.2.17/styles.css' integrity='sha384-bM49M0p1PhqzW3LfkRUPZncLHInFknBRbB7S0jPGePYM+u7mLTBbwL0Pj/dQ7WqR' crossorigin='anonymous'/>
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
        )
    }
}

export default MainDocument;
