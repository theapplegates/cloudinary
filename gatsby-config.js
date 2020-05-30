// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: "@afuh/gatsby-theme-minimal",
      options: {
        contentful: {
          spaceId: "jp4szmcgk445",
          accessToken: "2bNkiDhBFc2Pki6pvmznpJLKwBpAYIIsdQXn06aFDwA"
        },
        title: "Living Life",
        description: "Writing some things down along the way",
        siteUrl: 'https://mystifying-mahavira-569912.netlify.app', // no trailing slash
      }
    }
  ]
}
