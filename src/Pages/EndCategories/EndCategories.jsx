import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import CategoryItem from '../../Components/Home/CategoryItem'
import Navigator from '../../Components/Shared/Navigator/Navigator'
import Error from '../Error/Error'

export default function EndCategories() {
    const {midCategory, endCategory} = useSelector(state => state.category)

    const {mid_category} = useParams()
    const catName = mid_category.replaceAll('-', ' ')
    console.log(catName)
    const selectedCat = midCategory.find(cat => cat.name.toLowerCase() == catName)
    console.log(selectedCat)
    const filteredCategories = endCategory.filter(endCat => endCat.mcatId === selectedCat.id)
    console.log(filteredCategories)
    return (
        <main>
            <Navigator />
            {
                selectedCat ?
            <>
            <h2>All Sub Categories</h2>
            <div className='container'>
            {
                filteredCategories.map(item => <CategoryItem key={item.id} item={item} />)
            }
            </div>
            </>
            : <Error /> }
        </main>
    )
}
