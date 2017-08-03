import React, {Component} from 'react';

class CharacterCounter extends Component {
    constructor() {
        super()
        this.state= {
            characters: 0
            // currentInput: 0
        }
        this._handleInput = this._handleInput.bind(this);
    }

    _handleInput(event) {
        var value = event.target.value;
        this.setState({
            characters: value.length
        })
    }
    render() {
        return ( 
            <form>
                <input type="text" placeholder="Enter your text here" onInput={this._handleInput}/><p>{this.state.characters}</p>
            </form>
        )
    }
}

export default CharacterCounter;