import React, { Component } from 'react'
import Bulma from 'bulma'

export default class SignupPage extends Component {

    state = {
        email: '',
        password: '',
        nationality: ''
    }

    handleChange(event) {
        // this.setState({value: event.target.value});
      }
    
    handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label class="label">E-mail:</label>
                    <input class="input" value={this.state.email} type="text" placeholder="Enter e-mail address"/>
                    <label class="label">Password:</label>
                    <input class="input"  value={this.state.password} type="password" placeholder="Enter password"/>
                    <label class="label">Nationality:</label>
                    <div class="select">
                        <select>
                            <option>English</option>
                            <option>German</option>
                            <option>French</option>
                        </select>
                    </div>
                    <button type="Submit" value="Submit" class="button is-link">Sign up</button>
                </form>
            </div>
        )
    }
}
