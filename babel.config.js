module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@common': './src/common',
          '@services': './src/services',
          '@config': './src/config',
          "@store":'./src/store',
          "@screens":'./src/screens',
        },
      },
    ],
  ],
};
