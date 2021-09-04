import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

export default function Navigator() {
    const params = useParams()
    console.log(params.category)
    Object.keys(params).forEach(item => console.log(params[item]))
    return (
        <div className='navigator'>
            <h3>
                <Link to='/'>Home</Link>
                {
                    params.category && <> {'>'} <Link to={`/${params.category}`}>{params.category.replaceAll('-', ' ')}</Link> </>
                }
                {
                    params.mid_category && <> {'>'} <Link to={`/${params.category}/${params.mid_category}`}>{params.mid_category.replaceAll('-', ' ')}</Link> </>
                }
                {
                    params.productid && <span>{'>'}{params.productid}</span>
                }
                
            </h3>
            
        </div>
    )
}
