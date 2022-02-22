module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: 'react-native-dotenv',
        path: '.env',
        blacklist: null,
        whitelist: [
          'HOST',
          'PORT',
          'APIKEYFIREBASE',
          'AUTHDOMAINFIREBASE',
          'PROJECTIDFIREBASE',
          'STORAGEBUCKETFIREBASE',
          'MESSAGINGSENDERFIREBASE',
          'APPIDFIREBASE',
          'MEASUREMENTIDFIREBASE',
          'DATABASEURLFIREBASE',
        ],
        safe: false,
        allowUndefined: true,
      },
    ],
  ],
};
