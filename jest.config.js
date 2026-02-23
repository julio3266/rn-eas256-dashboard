module.exports = {
    preset: 'react-native',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transformIgnorePatterns: [
        'node_modules/(?!(react-native|@react-native|expo|@expo|react-native-.*)/)',
    ],
    moduleNameMapper: {
        '^@data/(.*)$': '<rootDir>/src/data/$1',
        '^@domain/(.*)$': '<rootDir>/src/domain/$1',
        '^@presentation/(.*)$': '<rootDir>/src/presentation/$1',
        '^@main/(.*)$': '<rootDir>/src/main/$1',
        '^@config$': '<rootDir>/src/config.ts',
    },
    collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts', '!src/**/index.{ts,tsx}'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    testPathIgnorePatterns: ['/node_modules/', '/android/', '/ios/'],
};
