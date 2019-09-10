import React from "react"
import { graphql, useStaticQuery } from 'gatsby';

import Prdouct from './product';

const PRODUCTS_LISTING_QUERY = graphql`
query ProductListingQuery {
  allShopifyProduct {
    edges {
      node {
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
  }
}
`
const ProductListing = () => {
  const {allShopifyProduct} = useStaticQuery(PRODUCTS_LISTING_QUERY)
  return (
    <div>
      {allShopifyProduct.edges.map(edge => {
        return (<Prdouct product={edge.node} key={edge.node.id}/>)
      })}
    </div>
  )
}

export default ProductListing

