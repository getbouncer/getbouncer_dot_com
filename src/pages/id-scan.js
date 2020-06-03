import dynamic from "next/dynamic";

// This page is legacy, but google has already indexed it. Redirect to our home page
function IdScanPage() {}

IdScanPage.getInitialProps = ({ res }) => {
  if (res) {
    res.writeHead(301, {
      Location: '/'
    });
    res.end();
  }

  return {};
}

export default IdScanPage