module.exports = {
  collectCoverageFrom: ["<rootDir>/pages/**/*.{js,ts,jsx,tsx}", "<rootDir>/components/**/*.{js,ts,jsx,tsx}"],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    },
  },
  setupFilesAfterEnv: ["<rootDir>/test/jest.setup.js"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
  },
  transformIgnorePatterns: [
    "/node_modules/:"
  ],
  moduleNameMapper: {
    "^@components(.*)$": "<rootDir>/components$1",
    "^@pages(.*)$": "<rootDir>/pages$1"
  }
};
