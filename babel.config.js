module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          types: './src/types',
          navigation: './src/navigation',
          helpers: './src/helpers',
          components: './src/components',
          views: './src/views',
        },
      },
    ],
  ],
}
