import React, { Component } from 'react'

class LikeButton extends Component {
  constructor(){
    super()
    this.state = {likes: 0};

    this.incrementLikes = this.incrementLikes.bind(this);
  }


  incrementLikes() {
    this.setState( {
      likes: this.state.likes+1
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.incrementLikes}>{this.state.likes} Likes</button>
      </div>
    )
  }
}

export default LikeButton;
