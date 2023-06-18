import React, { useState } from 'react'
import { products } from '../mocks/products.json'
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer.jsx'
import { FilterContainer } from '../components/FilterContainer/FilterContainer'
export const HomePage = () => {
 const [filters, setFilters] =useState({
  category:'all',
  minPrice:'0'
 })
 const filterProducts =(products) =>{
  return products.filter(product=>{
    return (
      product.price >= filters.minPrice &&
      (
       filters.category === 'all' ||
       product.category ===filters.category
      )
    )
  }) 
 }
 const filteredProducts = filterProducts(products)
  return (
    <div>
      < FilterContainer changeFilters={setFilters}/>
      <ItemListContainer products={filteredProducts} />

    </div>
  )
}

