import React, {Component} from 'react';

class GithubSearchForm extends Component {

  render() {
    return (
      <form onSubmit={this._handleSubmit.bind(this)} >
        <p>Enter a GitHub username:</p>
        <input type="text" ref="userInput" />
        <button>Go!</button>
      </form>
    );
  }
  
  _handleSubmit= (e) => {
    e.preventDefault();
    this.props.onSearch(this.refs.userInput.value);    
    
  }
  
};



export default GithubSearchForm;