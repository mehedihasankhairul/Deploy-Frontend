import React from 'react'
import {Link} from 'react-router-dom'

export default function Error() {
    return (
        <div>
            <h2>Page Not Found</h2>
            <Link to={'/'}>Go Back to home.</Link>
        </div>
    )
}
