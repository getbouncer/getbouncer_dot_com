import '../styles/styles.css';

import 'bootstrap/dist/css/bootstrap.min.css';


// This default export is required in a new `pages/_app.js` file.
export default function Bouncer({ Component, pageProps }) {
  return (
    <div>
      <head>
        <title>Get Bouncer</title>
        <script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
        <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
      </head>
      <Component {...pageProps} />
    </div>
  )
}
