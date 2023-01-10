module.exports = {
  verbose: true,
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.history/',
    '/__fixtures__/',
    '/dist/',
  ],
  testTimeout: 30000,
  collectCoverage: true,
  coverageDirectory: './.coverage',
}
