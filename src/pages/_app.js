import '../styles/styles.css';

import 'bootstrap/dist/css/bootstrap.min.css';


// This default export is required in a new `pages/_app.js` file.
export default function Bouncer({ Component, pageProps }) {
  return (
    <div>
      <title>Get Bouncer</title>
      <Component {...pageProps} />
    </div>
  )
}
