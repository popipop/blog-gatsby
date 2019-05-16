import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"

const SecondPage = () => (
  <Layout page='4'>
    <SEO title="About" />
    <h1>About</h1>
    <Bio />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
