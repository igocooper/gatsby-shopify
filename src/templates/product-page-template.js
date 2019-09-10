import React from "react"
import ProductDetail from "../components/product-detail"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const ProductPageTemplate = ({ data }) => (
  <Layout>
    <ProductDetail product={data.shopifyProduct} />
  </Layout>
)

export const query = graphql`
  query ProductQuery($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      images {
        localFile {
          childImageSharp {
            fixed(width: 200) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
      }
      publishedAt(formatString: "YYYY")
      description
      variants {
        sku
        id
        title
        price
      }
    }
  }
`

export default ProductPageTemplate
