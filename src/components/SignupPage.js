import React, { Component } from 'react'
import bulma from 'bulma'

export default class SignupPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            nationality: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event) {
        console.log(event.target.value)
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label className="label">E-mail:</label>
                    <input className="input" type="text" placeholder="Enter e-mail address"/>
                    <label className="label">Password:</label>
                    <input className="input" type="password" placeholder="Enter password"/>
                    <label className="label">Nationality:</label>
                    <div className="select">
                        <select>
                            <option>English</option>
                            <option>German</option>
                            <option>French</option>
                        </select>
                    </div>
                    <button type="Submit" value="Submit" className="button is-link">Sign up</button>
                </form>
            </div>
        )
    }
}
