module.exports = {
  siteMetadata: {
    title: `A11y Meetup Berlin`,
    siteUrl: `https://a11y-meetup-berlin.de`,
    description: `A11y Meetup Berlin - a usergroup about accessibility and inclusive design.`,
    author: `@a11yberlin`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `events`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-svg-sprite`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `a11y-meetup-berlin`,
        short_name: `a11yberlin`,
        start_url: `/`,
        background_color: `#003846`,
        theme_color: `#003846`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    `gatsby-plugin-offline`,
  ],
};
