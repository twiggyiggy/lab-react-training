import React, { Component } from 'react'

class ClickablePicture extends Component {

    constructor(props) {
        super(props)
        this.props = props
        this.state = {
            isClicked: false
        }
        this.changeState = this.changeState.bind(this);
    }

    changeState(e) {
        e.preventDefault();
        if (!this.state.isClicked) {
            this.setState({
                isClicked: true
            })
        } else {
            this.setState({
                isClicked: false
            })
        }
    }

    render() {

        let img;

        img = this.state.isClicked ? <img src={this.props.imgClicked}/> : <img src={this.props.img}/>


        return (
            <div>
                <a href="#" onClick={this.changeState}>
                    {img}
                </a>
            </div>
        )
    }
}

export default ClickablePicture;