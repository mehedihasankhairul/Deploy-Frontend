import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import CategoryItem from '../../Components/Home/CategoryItem'
import Navigator from '../../Components/Shared/Navigator/Navigator'
import Error from '../Error/Error'

export default function Category () {
  const { topCategory, midCategory } = useSelector(state => state.category)

  const { category } = useParams()
  const selectedCat = topCategory.find(cat => cat.slug === category)
  const subCategories = selectedCat ? midCategory.filter(sCat => sCat.tCatId === selectedCat.tCatId) : null
  return (
        <main>
            <Navigator />
            {
                selectedCat
                  ? <>
            <h2>All Sub Categories</h2>
            <div className='container'>
            {
                subCategories.map(item => <CategoryItem key={item.id} item={item} />)
            }</div>
            </>
                  : <Error /> }
        </main>
  )
}
