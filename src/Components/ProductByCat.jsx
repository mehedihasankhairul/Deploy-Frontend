import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

export default function ProductByCat() {
  const { end_category } = useParams()
  const { endCategory } = useSelector(state => state.category)
  const selectedCategory = endCategory.find(cat => cat.slug.includes(end_category))
  const allProducts = useSelector(state => state.products)
  const filterProducts = allProducts.filter(product => product.ecatId === selectedCategory.id)
  return (
    <div>
      <h2>Products with category {selectedCategory.subCat} - {filterProducts.length}</h2>
      {
        filterProducts.map(prod => <p key={prod.id}>{prod.productName}</p>)
      }
    </div>
  )
}
