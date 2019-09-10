/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const pages = await graphql(`
    {
      allShopifyProduct {
        edges {
          node {
            id
            handle
          }
        }
      }
    }
  `)

  pages.data.allShopifyProduct.edges.forEach( ({ node: {handle, id}}) => {
    createPage({
      path: `/products/${handle}`,
      component: path.resolve('./src/templates/product-page-template.js'),
      context: {
        id,
        handle,
      }
    })
  })
}
