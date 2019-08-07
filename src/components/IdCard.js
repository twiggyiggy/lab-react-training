import React from 'react'

function IdCard (props) {

    // const dateOfBirth = props.birth.toUTCString();

    return (
        <div className="idCardBox">
            <section>
                <img src={props.picture} alt="Portrait of contact"/>    
            </section>
            <section>
                <p><strong>First name: </strong>{props.firstName}</p>
                <p><strong>Last name: </strong>{props.lastName}</p>
                <p><strong>Gender: </strong>{props.gender}</p>
                <p><strong>Height: </strong>{props.height}</p>
                <p><strong>Birth: </strong>{props.birth.toDateString()}</p>
            </section> 
        </div>
    )
}

export default IdCard
