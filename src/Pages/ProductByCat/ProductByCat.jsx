import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

export default function ProductByCat () {
  const { end_category } = useParams()
  const { endCategory } = useSelector(state => state.category)
  const catName = end_category.replaceAll('-', ' ')
  const selectedCategory = endCategory.find(cat => cat.name.toLowerCase() === catName)
  const allProducts = useSelector(state => state.products)
  console.log(allProducts, end_category)
  const filterProducts = allProducts.filter(product => product.ecatId === selectedCategory.id)
  console.log('filterProducts', filterProducts)
  return (
        <div>
            <h2>Products with category {selectedCategory.subCat} - {filterProducts.length}</h2>
            {
                filterProducts.map(prod => <p key={prod.id}>{prod.productName}</p>)
            }
        </div>
  )
}
