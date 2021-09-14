const { withPlaiceholder } = require('@plaiceholder/next');

module.exports = withPlaiceholder({
  reactStrictMode: false,
  images: {
    domains: [
      'almacenamiento-r3d.s3.us-east-2.amazonaws.com'
    ]
  },
})