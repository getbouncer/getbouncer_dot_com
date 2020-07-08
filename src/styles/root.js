import { css } from '@emotion/core'

const root = css`
  html {
    box-sizing: border-box;
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    height: 100%;
    overscroll-behavior: none;
    -ms-scroll-chaining: none;
  }

  html,
  body {
    overflow-x: hidden;
    overscroll-behavior: none;
    -ms-scroll-chaining: none;
    width: 100vw;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  h1 {
    @media (max-width: 920px) {
      font-size: 2.85rem;
    }
  }
`

export default root
