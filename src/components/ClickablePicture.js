import React, { Component } from 'react'

class ClickablePicture extends Component {

    constructor(props) {
        this.props = props
        super(props)
        this.state = {
            isClicked: false
        }
    }

    changeState() {

    }

    render() {

        let img;

        if (this.state.isClicked) {
            img = <img url={this.props.imgClicked}/>
        } else {
            img = <img url={this.props.img}/>
        }

        return (
            <div>
                <button onClick={this.changeState}>
                    {img}
                </button>
            </div>
        )
    }
}

export default ClickablePicture;