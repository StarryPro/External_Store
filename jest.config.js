module.exports = {
  testEnvironment: 'jsdom',

  // React Testing Library 관련 설정(setupFilesAfterEnv)
  setupFilesAfterEnv: [
    '<rootDir>/src/setupTests.ts',
  ],

  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest', {
      jsc: {
        parser: {
          syntax: 'typescript',
          jsx: true,

          // React Testing Library 관련 설정(decorators)
          decorators: true,

        },
        transform: {
          react: {
            runtime: 'automatic',
          },
          // React Testing Library 관련 설정(legacyDecorator, decoratorMetadata)
          legacyDecorator: true,
          decoratorMetadata: true,
        },
      },
    }],
  },
};
