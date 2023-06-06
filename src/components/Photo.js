import React from 'react'
import { useSelector } from 'react-redux'

function Photo() {
    const photoUrl = useSelector(state => state.photo)

    return (
        <div className="Photo">
            <img src={photoUrl} alt="author" />
        </div>
    )
}

export default Photo
