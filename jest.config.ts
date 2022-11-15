import type { Config } from 'jest'

const config: Config = {
  clearMocks: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['html'],
  fakeTimers: { now: 1664703388050 }, // 2022-01-01T23:00:00.135Z
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
  ],
  moduleNameMapper: {
    ".+\\.css$": 'identity-obj-proxy',
  },
  resetMocks: true,
  restoreMocks: true,
  setupFilesAfterEnv: ['./jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: [
    '<rootDir>/src/**/*(*.)@(test).ts?(x)',
  ],
  transform: {
    "^.+\\.[jt]sx?$": './jest-preprocess.ts',
  },
}

export default config
