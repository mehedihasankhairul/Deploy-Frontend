import React from 'react'
import { useParams } from 'react-router'
import Navigator from '../../Components/Shared/Navigator/Navigator'

export default function Product () {
  const { category, subCategory, productid } = useParams()
  console.log(category, subCategory)
  return (
        <main>
            <Navigator />
            {/* <h3>
                <a href="/">Home</a> {`>`}
                <a href={`/${category}`}>{category}</a> {`>`}
                <a href="/">{subCategory}</a>
                </h3> */}
            <h2>Product information of Product ok - {productid}</h2>
        </main>
  )
}
