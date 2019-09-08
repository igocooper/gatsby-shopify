import React from "react"

import Layout from "../components/layout"
import ProductListing from "../components/product-listing"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ProductListing />
  </Layout>
)

export default IndexPage
