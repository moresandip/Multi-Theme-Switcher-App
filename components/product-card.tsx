"use client"

import { Star, ShoppingCart } from "lucide-react"
import { useState } from "react"

interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000) // Reset after 2 seconds
  }

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image || "/placeholder.svg"} alt={product.title} className="product-image" />
      </div>
      <div className="product-content">
        <div className="product-category">{product.category}</div>
        <h3 className="product-title">{product.title}</h3>
        <p className="product-description">
          {product.description.length > 100 ? `${product.description.substring(0, 100)}...` : product.description}
        </p>
        <div className="product-rating">
          <div className="rating-stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`star ${i < Math.floor(product.rating.rate) ? "star-filled" : ""}`} />
            ))}
          </div>
          <span className="rating-text">
            {product.rating.rate} ({product.rating.count})
          </span>
        </div>
        <div className="product-footer">
          <span className="product-price">${product.price}</span>
          <button
            onClick={handleAddToCart}
            className={`product-button ${isAdded ? "product-button-added" : ""}`}
            disabled={isAdded}
          >
            <ShoppingCart className="button-icon" />
            {isAdded ? "Added!" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  )
}
