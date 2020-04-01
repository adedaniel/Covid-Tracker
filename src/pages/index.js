import React from "react"
import Home from "../components/home/home"
import Layout from "../components/layout"
import axios from 'axios'
import SEO from "../components/seo"
axios.post('/__refresh')
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
  </Layout>
)

export default IndexPage
