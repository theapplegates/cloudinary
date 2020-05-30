module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-catch-links/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-nprogress/gatsby-browser.js'),
      options: {"plugins":[],"color":"#78ff78","showSpinner":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Living Life","short_name":"Living Life","description":"Writing some things down along the way","start_url":"https://example.com","background_color":"#FEFEFE","theme_color":"#212129","display":"standalone","icon":"theme-content/images/icon-512x512.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"dfc15d8636afadbe1cc307dce6495107"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/@afuh/gatsby-theme-minimal/gatsby-browser.js'),
      options: {"plugins":[],"contentful":{"spaceId":"jp4szmcgk445","accessToken":"2bNkiDhBFc2Pki6pvmznpJLKwBpAYIIsdQXn06aFDwA"},"title":"Living Life","description":"Writing some things down along the way","siteUrl":"https://example.com"},
    }]
