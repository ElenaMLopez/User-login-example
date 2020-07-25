module.exports = {
  verbose: true,
  preset: "@vue/cli-plugin-unit-jest",
  mocks: "./test/unit/mocks",
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,vue}",
    "!src/main.js" // No need to cover bootstrap file
  ]
};
