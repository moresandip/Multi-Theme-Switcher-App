"use client"

import { ProductCard } from "@/components/product-card"
import { ShoppingBag, Zap, Shield, Heart } from "lucide-react"
import { useEffect, useState } from "react"

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

// Default fallback products
const fallbackProducts = [
  {
    id: 1,
    title: "Premium Wireless Headphones",
    price: 199.99,
    description: "High-quality wireless headphones with noise cancellation and premium sound quality.",
    category: "electronics",
    image: "/placeholder.svg?height=200&width=200&text=Headphones",
    rating: { rate: 4.5, count: 120 },
  },
  {
    id: 2,
    title: "Smart Fitness Watch",
    price: 299.99,
    description: "Advanced fitness tracking with heart rate monitoring and GPS capabilities.",
    category: "electronics",
    image: "/placeholder.svg?height=200&width=200&text=Watch",
    rating: { rate: 4.3, count: 89 },
  },
  {
    id: 3,
    title: "Organic Cotton T-Shirt",
    price: 29.99,
    description: "Comfortable and sustainable organic cotton t-shirt in various colors.",
    category: "clothing",
    image: "/placeholder.svg?height=200&width=200&text=T-Shirt",
    rating: { rate: 4.7, count: 156 },
  },
  {
    id: 4,
    title: "Professional Camera Lens",
    price: 599.99,
    description: "High-performance camera lens for professional photography and videography.",
    category: "electronics",
    image: "/placeholder.svg?height=200&width=200&text=Camera+Lens",
    rating: { rate: 4.8, count: 67 },
  },
  {
    id: 5,
    title: "Ergonomic Office Chair",
    price: 399.99,
    description: "Comfortable ergonomic office chair with lumbar support and adjustable height.",
    category: "furniture",
    image: "/placeholder.svg?height=200&width=200&text=Office+Chair",
    rating: { rate: 4.4, count: 203 },
  },
  {
    id: 6,
    title: "Artisan Coffee Beans",
    price: 24.99,
    description: "Premium single-origin coffee beans roasted to perfection for coffee enthusiasts.",
    category: "food",
    image: "/placeholder.svg?height=200&width=200&text=Coffee+Beans",
    rating: { rate: 4.6, count: 94 },
  },
]

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>(fallbackProducts)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products?limit=6", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          cache: "no-store",
        })

        if (response.ok) {
          const data = await response.json()
          if (Array.isArray(data) && data.length > 0) {
            setProducts(data)
          }
        }
      } catch (err) {
        // Keep fallback products if API fails
      }
    }

    fetchProducts()
  }, [])

  const handleExploreProducts = () => {
    const productsSection = document.getElementById("products-section")
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleLearnMore = () => {
    const featuresSection = document.getElementById("features-section")
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const features = [
    {
      icon: <Zap className="feature-icon" />,
      title: "Lightning Fast",
      description: "Optimized performance for the best user experience",
    },
    {
      icon: <Shield className="feature-icon" />,
      title: "Secure & Safe",
      description: "Your data is protected with enterprise-grade security",
    },
    {
      icon: <Heart className="feature-icon" />,
      title: "User Friendly",
      description: "Intuitive design that anyone can use effortlessly",
    },
  ]

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="hero-highlight">ThemeSwitch</span>
          </h1>
          <p className="hero-description">
            Experience the power of dynamic theming with our innovative multi-theme application. Switch between
            beautiful themes and discover a new way to interact with content.
          </p>
          <div className="hero-actions">
            <button onClick={handleExploreProducts} className="hero-button-primary">
              <ShoppingBag className="button-icon" />
              Explore Products
            </button>
            <button onClick={handleLearnMore} className="hero-button-secondary">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features-section" className="features-section">
        <div className="section-header">
          <h2 className="section-title">Why Choose ThemeSwitch?</h2>
          <p className="section-description">Discover the features that make our platform unique</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon-container">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section id="products-section" className="products-section">
        <div className="section-header">
          <h2 className="section-title">Featured Products</h2>
          <p className="section-description">Discover our curated selection of premium products</p>
        </div>
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}
