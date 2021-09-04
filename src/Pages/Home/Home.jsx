import React from 'react'
import { useSelector } from 'react-redux'
import CategoryItem from '../../Components/Home/CategoryItem'

export default function Home () {
  const { midCategory, topCategory } = useSelector(state => state.category)
  console.log(topCategory)

  return (
        <div>
            <h3>Navbar</h3>
            <h3>Slider</h3>
            <h3>Banner</h3>
            <h3>Mid Categories Slider</h3>
            <div className='container'>
            {
                midCategory.slice(0, 6).map(item => <CategoryItem key={item.id} item={item} />)
            }</div>
            <h2>Top Categories</h2>
            <div className='container'>
            {
                topCategory.slice(0, 6).map(item => <CategoryItem key={item.id} item={item} />)
            }</div>
            <h3>Banner</h3>
            <h3>Top Categories</h3>
            <h3>Banner</h3>
            <h3>Product of Top Categories</h3>
            <h3>Partner</h3>
            <h3>Footer</h3>
        </div>
  )
}
