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
        this.changeSelectedCountry = this.changeSelectedCountry.bind(this);
    }

    getUniqueCountries(profiles) {
        for (let i = 0; i < profiles.length; i++) {
            if (!this.uniqueCountries.includes(profiles[i].country)) {
                this.uniqueCountries.push(profiles[i].country)
            }
        }
    }


    getCSSClassName(profile) {
        if (profile.country === this.state.selectedCountry) {
            return "facebook-card selected-facebook-card"
        } else {
            return "facebook-card"
        }
    }

    // buttons = uniqueCountries.map()
    getCards() {
        let cards = profiles.map((profile, index) => 
            <article key = {index} className={this.getCSSClassName(profile)}>
                <img src = {profile.img} width='50px' alt='profile'/>
                <p><strong>First name: </strong> {profile.firstName}</p>
                <p><strong>Last name: </strong> {profile.lastName}</p>
                <p><strong>Country: </strong> {profile.country}</p>
                <p><strong>Type: </strong> {profile.isStudent ? "Student" : "Teacher"} </p>
            </article>
        )
        return cards;
    }

    changeSelectedCountry(country){
        // console.log(country);
        this.setState({
            selectedCountry: country,
        })
    }

    getButtons() {
        let buttons = this.uniqueCountries.map((country, index) => 
            <button onClick={() => this.changeSelectedCountry(country)} key={index}>{country}</button>        
        )
        return buttons;
    }

    render() {
        return (
            <div>
                {this.getButtons()}
                {this.getCards()}
            </div>
        )
    }
}
