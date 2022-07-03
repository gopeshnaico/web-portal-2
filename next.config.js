// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');
const { withSentryConfig } = require('@sentry/nextjs');
const { i18n } = require('./next-i18next.config');

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  i18n,
  // i18n: {
  //   /**
  //    * Provide the locales you want to support in your application
  //    */
  //   locales: ['en-US', 'fr-FR', 'es-ES'],
  //   /**
  //    * This is the default locale you want to be used when visiting
  //    * a non-locale prefixed path.
  //    */
  //   defaultLocale: 'en-US',
  // },
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  images: {
    loader: 'custom',
  },
};

// const sentryWebpackPluginOptions = {
//   silent: true,
// };

// module.exports = withSentryConfig(
//   withNx(nextConfig),
//   sentryWebpackPluginOptions
// );

module.exports = nextConfig;

// module.exports = {
//     i18n: {
//       /**
//        * Provide the locales you want to support in your application
//        */
//       locales: ["en-US", "fr-FR", "es-ES"],
//       /**
//        * This is the default locale you want to be used when visiting
//        * a non-locale prefixed path.
//        */
//       defaultLocale: "en-US",
//     },
//   };