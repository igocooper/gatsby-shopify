import React from 'react'
import Img from 'gatsby-image';

const Product = ({product}) => {
  const img = product.images[0].localFile.childImageSharp.fixed;
  return (
    <article>
      <Img fixed={img} />
      <h3>{product.title}</h3>
    </article>
  )
}

export default Product
