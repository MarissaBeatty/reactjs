import React, {Component} from 'react';

class NumberGuessing extends Component {
    constructor() {
        super()
        this.state= {
            
        }
        this._startGame = this._startGame.bind(this);
        this._checkGuess = this._checkGuess.bind(this);
    }
    
    _startGame() {
        this.setState({
            gameStatus: 'playing', 
            numberToGuess: Math.floor(Math.random() * 100),
            guesses: []
        }) 
    }   

    render() {
        if(this.state.gameStatus === undefined) {
            return null
        } else if(this.state.gameStatus === 'win' || this.state.gameStatus === 'lose') {
             return ( 
                <form onSubmit={this._startGame.bind(this)}>
                    <button type="submit">Start New Game</button>
                </form>
            )
            
        }   
        else if(this.state.gameStatus === 'playing') {
                return ( 
                    
                    <form onSubmit={this._checkGuess.bind(this)}>
                        <h2>Guess the Number between 1 and 100!</h2>
                        <input type="number" ref="userGuess" />
                        <button type="submit">Guess</button>
                        <p>{(5) - (this.state.guesses.length)} guesses remaining</p>
                    </form>
                )
        } 
    } 
    
    componentDidMount() {
        this._startGame()
    }
    
    _checkGuess = (e) => {
         e.preventDefault();
         var guesses = this.state.guesses;
         guesses.push(this.refs.userGuess.valueAsNumber);
        
        console.log(this.state.gameStatus)
        
        if(this.refs.userGuess.valueAsNumber === this.state.numberToGuess) {
            alert("You Win!"); 
            this.setState({
                gameStatus: 'win', 
                // guesses: []
            }) 
        } else if(this.state.guesses.length === 5) {
            alert("you lose");
            this.setState({
                gameStatus: 'lose', 
            }); 
        } else if(this.refs.userGuess.valueAsNumber < this.state.numberToGuess) {
            alert("too low");
            this.setState({
                gameStatus: 'playing', 
            }) 
        } else if(this.refs.userGuess.valueAsNumber > this.state.numberToGuess) {
            alert("too high");
            this.setState({
                gameStatus: 'playing', 
            }) 
        } 
    }
    
 
}

export default NumberGuessing;