import React, {Component} from 'react';


class GuessTheNumber extends Component {

    _handleButtonClick = (e) => {
        var userGuess = Number(this.refs.userGuess.value);
        var numberToGuess = this.props.numberToGuess;
        e.preventDefault();
       
        // console.log(this);
        // console.log(this.props.numberToGuess.value);
        // console.log(Number(this.props.userGuess.value));
        
        if(userGuess === numberToGuess) {
            alert('What are you, psychic!?!?!?!');
        } else if(userGuess > numberToGuess) {
            alert('HAHAHHA nope! too high!')
        } else if(userGuess < numberToGuess) {
            alert('Sorry. too low!')
        }
    }
    render() {
    
    return (
      <form onSubmit={this._handleButtonClick.bind(this)}>
        <input type="text" ref="userGuess" />
        <button type="submit">Check</button>
      </form>
    );
  }
    
}

export default GuessTheNumber;