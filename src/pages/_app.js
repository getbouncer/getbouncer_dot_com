import '../styles/styles.css';

import 'bootstrap/dist/css/bootstrap.min.css';


// This default export is required in a new `pages/_app.js` file.
export default function Bouncer({ Component, pageProps }) {
  return (
    <div>
      <head>
        <title>Get Bouncer</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
      </head>
      <Component {...pageProps} />
    </div>
  )
}
