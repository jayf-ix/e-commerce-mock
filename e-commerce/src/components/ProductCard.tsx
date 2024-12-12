import React from 'react'
import { ProductCardProps } from '../Entities/Product'

const ProductCard = (props:ProductCardProps) => {
  return (
    <div className="card shadow-sm">
      <img
        src={props.imageUrl}
        className="card-img-top"
        alt={props.title}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
          SKU: {props.sku}
        </p>
        <p className="card-text">
          From <strong>{props.price}</strong>
        </p>
        <a href={props.viewProductLink} className="btn btn-warning">
          View Product
        </a>
      </div>
    </div>
  )
}

export default ProductCard
