import React from "react"
import Layout from "../components/Layout/Layout"
import "../styles/global.css"
import Hero from "../components/Hero/Hero"
import About from "../components/About/About"
import Projects from "../components/Projects/Projects"
import Coordinators from "../components/Coordinators/Coordinators"
import InterestForm from "../components/Form/InterestForm"
import Team from "../components/Team/Team"
import Helmet from "react-helmet"
import { graphql } from "gatsby"

export default function Home({ data }) {
  const REACT_APP_BASE_URL = "https://api.dodeelcds.com.ng"
  return (
    <Layout>
      <Helmet>
        <title>DO-DEEL CDS </title>
        <meta charset="UTF-8" />
        <meta
          name="google-site-verification"
          content="VOKD2cO-QTbNntKcrEjAhoTPsk17VHhLJO9Dq9jmM-M"
        />
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta name="keywords" content={data.site.siteMetadata.keywords} />
        <meta property="og:title" content={data.site.siteMetadata.title} />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content={data.site.siteMetadata.description}
        />
        <meta property="og:image" content="" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content={data.site.siteMetadata.url} />
        <link rel="canonical" href={data.site.siteMetadata.url} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <div className="max-w-6xl container mx-auto px-4">
        <Hero />
        <About />
        <Projects />
        <Coordinators />
        <Team />
        <InterestForm api={REACT_APP_BASE_URL} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        description
        keywords
        title
        url
      }
    }
  }
`
