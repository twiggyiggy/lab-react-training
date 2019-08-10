import React, { Component } from 'react'
import profiles from '../data/berlin.json'


export default class FaceBookAdvanced extends Component {
    
    uniqueCountries = []

    constructor(props) {
        super(props)
        this.state = {
            selectedCountry: 0
        }
        this.getUniqueCountries(profiles)
        console.log(this.uniqueCountries)
    }

    getUniqueCountries(profiles) {
        for (let i = 0; i < profiles.length; i++) {
            if (!this.uniqueCountries.includes(profiles[i].country)) {
                this.uniqueCountries.push(profiles[i].country)
            }
        }
    }


    getClassName(profile) {
        if (profile.country === this.state.selectedCountry) {
            return "facebook-card selected-facebook-card"
        } else {
            return "facebook-card"
        }
    }

    // buttons = uniqueCountries.map()
    getCards() {
        let cards = profiles.map((profile, index) => 
            <article key = {index} className={this.getClassName(profile)}>
                <img src = {profile.img} width='50px'/>
                <p><strong>First name: </strong> {profile.firstName}</p>
                <p><strong>Last name: </strong> {profile.lastName}</p>
                <p><strong>Country: </strong> {profile.country}</p>
                <p><strong>Type: </strong> {profile.isStudent ? "Student" : "Teacher"} </p>
            </article>
        )
        return cards;
    }

    render() {
        return (
            <div>
                {this.buttons}
                {this.getCards()}
            </div>
        )
    }
}
