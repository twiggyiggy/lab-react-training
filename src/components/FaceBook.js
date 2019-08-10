import React from 'react'
import profiles from '../data/berlin.json'


export default function FaceBook() {

    function getType (profile) {

    }

    const cards = profiles.map((profile, index) => 
        <article key = {index}>
            <img src = {profile.img} width='50px'/>
            <p><strong>First name: </strong> {profile.firstName}</p>
            <p><strong>Last name: </strong> {profile.lastName}</p>
            <p><strong>Country: </strong> {profile.country}</p>
            <p><strong>Type: </strong> {profile.isStudent ? "Student" : "Teacher"} </p>
        </article>
    )

    return (
        <div>
            {cards}
        </div>
    )
}
