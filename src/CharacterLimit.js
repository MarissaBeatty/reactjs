import React, {Component} from 'react';

class CharacterLimit extends Component {
    constructor() {
        super()
        this.state= {
            currentInput: ''
        }
    }

    onInput(event) {
       
        if(event.target.value.length <= this.props.limit) {
            this.setState({
                currentInput: event.target.value, 
            }) 
        }   
    }
    
    render() {
        return ( 
            <form>
                <input type="text" value={this.state.currentInput} onInput={this.onInput.bind(this)}/><p>{(this.props.limit) - (this.state.currentInput.length)} remaining</p>
            </form>
        )
    }
}

export default CharacterLimit;