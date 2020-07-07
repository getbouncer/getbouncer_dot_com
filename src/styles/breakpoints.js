const size = {
  smartphone: '920px',
  tablet: '1168px',
  desktop: '1600px',
}

export default {
  aboveSmartphone: `(min-width: ${size.smartphone})`,
  smartphone: `(max-width: ${size.smartphone})`,
  tablet: `(max-width: ${size.tablet})`,
  desktop: `(max-width: ${size.desktop})`,
  largeDesktop: `(min-width: ${size.desktop})`,
}
