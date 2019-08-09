import React, { Component } from 'react';

class Dice extends Component {
  constructor(){
    super();
    this.state = { 
      diceValue: 3 
    }
    this.changeDiceValue = this.changeDiceValue.bind(this);
  }

  changeDiceValue(event){
    event.preventDefault();
    this.setState({
      diceValue: 0,
    })

    let newDiceValue = Math.floor(Math.random()*6 + 1);
    this.setState({
      diceValue: newDiceValue,
    })
  }

  render() {

    let img;

    switch(this.state.diceValue) {
      case 1:
          img = <img src='img/dice1.png'/>
        break;
      case 2:
          img = <img src='img/dice2.png'/>
        break;
      case 3:
          img = <img src='img/dice3.png'/>
        break;
      case 4:
          img = <img src='img/dice4.png'/>
        break;
      case 5:
          img = <img src='img/dice5.png'/>
        break;
      case 6:
          img = <img src='img/dice6.png'/>
        break;
      default:
          img = <img src='img/dice-empty.png'/>
        break;
    }

    return (
      <div className="dice-container">
        <a onClick={this.changeDiceValue}>
          {img}
        </a>
      </div>
    )
  }
}

export default Dice;