import React from 'react'

function DriverCard(props) {

    function getStars(rating) {
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

    const divStyle = { backgroundColor: 'blue',
                       color: 'white'};

    return (
        <div style={divStyle}>
            <div>
                <img src={props.img} width='100px' alt={props.name} />
            </div>
            <div>
                <h3>{props.name}</h3>
                {getStars(props.rating)}
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard