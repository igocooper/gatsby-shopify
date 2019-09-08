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

