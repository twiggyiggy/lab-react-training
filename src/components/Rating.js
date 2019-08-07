import React from 'react'

function Rating(props) {

    function getStars(rating) {
        console.log(rating)
        switch (Math.round(rating)) {
            case 0:
                return '☆☆☆☆☆'
                break
            case 1:
                return '★☆☆☆☆'
                break
            case 2:
                return '★★☆☆☆'
                break
            case 3:
                return '★★★☆☆'
                break
            case 4:
                return '★★★★☆'
                break
            case 5:
                return '★★★★★'
                break
            default:
                return '✿✿✿✿✿'
        }
    }

    return (
        <div>
            {getStars(props.children)}
        </div>
    )
}

export default Rating;