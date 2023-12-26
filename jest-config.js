module.exports = {
    modulePaths: ["<rootDir>"],
    transform: {
        "\\.[jt]s?(x)$": "babel-jest",
    },
    moduleDirectories: ["node_modules", "js"],
    globals: {
    },
    testEnvironment: "jsdom",
    testMatch: ["**/tests/**/*.[jt]s?(x)", "**/__tests__/**/?(*.)+(spec|test).[jt]s?(x)"],
    testPathIgnorePatterns: ["__mocks__"],
    moduleNameMapper: {
        "\\.(css|less)$": "<rootDir>/tests/__mocks__/MockStyle.js",
        "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/tests/__mocks__/MockImage.js",
    },
    roots: ["<rootDir>/js"],
    setupFiles: ["<rootDir>/jest-setup.js"],
};
