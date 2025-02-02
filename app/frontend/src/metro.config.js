const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */

const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    assetExts: ['cjs', 'jsx', 'js', 'ts', 'tsx'], // Existing extensions
    sourceExts: ['svg', 'js', 'jsx', 'ts', 'tsx'], // Add 'svg' here
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);