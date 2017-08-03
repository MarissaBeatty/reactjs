import React, {Component} from 'react';
import GithubProfile from './GithubProfile';
import GithubSearchForm from './GithubSearchForm';

class GithubSearch extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <GithubSearchForm onSearch={this._handleSearch.bind(this)} />
        {this.state.user ? <GithubProfile username={this.state.user}/> : null} 
        {/*this is a JSX ternary expression that says if this.state.user is true(?) take the username from Github, if false (:), don't do anything*/}
      </div>
    );
  }
  
  _handleSearch(searchTerm) {
    //   console.log(searchTerm, "this is the search term")
       this.setState({
           user: searchTerm
       }) 
  } 
};

export default GithubSearch;