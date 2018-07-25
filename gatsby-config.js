module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
    plugins: [
        `gatsby-plugin-netlify-cms`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              path: `${__dirname}/blog`,
              name: "markdown-pages",
            },
          },
          `gatsby-transformer-remark`,
          `gatsby-plugin-react-helmet`,
          `gatsby-plugin-catch-links`,
    ],
  };