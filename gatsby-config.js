/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

 require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
//  const path = require(`path`)
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "DO-DEEL NYSC CDS",
    description: "Do-deel is a NYSC CDS group enabling Nigerian youths and Businesses for the digital economy",
    keywords: "DoDeel, Do-deel, NYSC, Mindthegap, Digital Onboarders, DigitalOnboarders, Mind the gap CDS, NYSC CDS, Do Deel, Do Dil",
    url: "https://dodeelcds.com.ng"
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-less`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
        {
          resolve: "gatsby-remark-external-links",
          options: {
            target: "_self",
            rel: "nofollow"
          }
        }
        ]
      }
    },
    
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    'gatsby-transformer-sharp',
  ],
}
