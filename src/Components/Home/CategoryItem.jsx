import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoryItem({item}) {
    const imageUrl = 'https://deploy.com.bd/assets/uploads/' + item.image

    const slug = item.name ? item.name.replaceAll(' ', '-').toLowerCase() : item.subCat.replaceAll(' ', '-').toLowerCase();
    console.log(slug)
    return (
        
        <Link to={slug}>
        <div className="item">
            <img src={imageUrl} alt="" />
            <h4>{item.name || item.subCat} </h4>
        </div>
        </Link>
    )
}
