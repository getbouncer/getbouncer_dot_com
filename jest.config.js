module.exports = {
  transform: {
    '^.+\\.jsx?$': '<rootDir>/jest-preprocess.js',
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/file-mock.js',
    '^~components(.*)$': '<rootDir>/src/components$1',
    '^~globals(.*)$': '<rootDir>/src/globals$1',
    '^~hooks(.*)$': '<rootDir>/src/hooks$1',
    '^~images(.*)$': '<rootDir>/src/images$1',
    '^~pages(.*)$': '<rootDir>/src/pages$1',
    '^~schemas(.*)$': '<rootDir>/src/schemas$1',
    '^~slices(.*)$': '<rootDir>/src/slices$1',
    '^~styles(.*)$': '<rootDir>/src/styles$1',
  },
  testPathIgnorePatterns: ['node_modules', '\\.cache', '<rootDir>.*/public'],
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  globals: {
    __PATH_PREFIX__: '',
  },
  testURL: 'http://localhost',
  setupFiles: ['<rootDir>/loadershim.js'],
}
