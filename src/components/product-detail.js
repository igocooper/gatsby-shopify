import React, { useState } from "react"
import Img from "gatsby-image"
const ProductDetails = ({ product }) => {
  const img = product.images[0].localFile.childImageSharp.fixed
  const [selectedVariant, setVariant] = useState(product.variants[0])
  return (
    <div>
      <h1>{product.title}</h1>
      <Img fixed={img} />
      <p>{product.description}</p>
      <p>{selectedVariant.price} UAH</p>
      <select
        value={selectedVariant.sku}
        onChange={e => {
          const selectedSku = e.target.value
          const variant = product.variants.find(
            variant => variant.sku === selectedSku
          )
          setVariant(variant)
        }}
      >
        {product.variants.map(variant => (
          <option key={variant.id} value={variant.sku}>
            {variant.title}
          </option>
        ))}
      </select>
    </div>
  )
}

export default ProductDetails
