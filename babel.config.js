module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
          allowUndefined: true,
        },
      ],
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            '@data': './src/data',
            '@domain': './src/domain',
            '@presentation': './src/presentation',
            '@main': './src/main',
            '@config': './src/config.ts',
          },
        },
      ],
    ],
  };
};