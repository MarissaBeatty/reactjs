import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageCaption from './ImageCaption.js';
import Layout from './Layout.js';
import GuessTheNumber from './GuessTheNumber.js';
import YouClicked from './YouClicked.js';
import CharacterCounter from './CharacterCounter.js';
import CharacterLimit from './CharacterLimit';
import NumberGuessing from './NumberGuessing';
import GithubProfile from './GithubProfile';
import GithubSearch from './GithubSearch';
// import GithubSearchForm from './GithubSearchForm';

var imageList = [
  {id: 42, source: "http://placekitten.com/g/210/210", text: "Hello kittenz!"},
  {id: 43, source: "https://facebook.github.io/react/img/logo.svg", text: "React Logo"},
  {id: 44, source: "https://media.giphy.com/media/EldfH1VJdbrwY/giphy.gif", text: "Mind Blown!"}
];
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <hr/>
          <h2>testing ImageCaption</h2>
          <ImageCaption caption="Rainbow cats" source="http://i.imgur.com/D8JWn.jpg" alt="two cats are playing together" />
          <hr/>
          <div>
          {imageList.map(item => 
            
            <ImageCaption key={item.id} source={item.source} text={item.text} />
            
          )}
          </div>
          <hr/>
          <div>
            <h2>Testing layout</h2>
            <Layout>
              <h2>About us</h2>
              <p>We are <a href="https://facebook.github.io/react/">React</a> developers!</p>
            </Layout>
          </div>
          <hr />
          <div>
            <p>Guess a number!</p> 
            <GuessTheNumber numberToGuess={5} />
          </div>
          <hr />
          <div>
            <YouClicked />
            <hr />
          </div>
          <div>
            <CharacterCounter />
            <hr />
          </div>
          <div>
            <CharacterLimit limit={140} />
            <br />
            <hr />
          </div>
          <div className="numberGuessing">
            <NumberGuessing />
            <br />
            <hr />
          </div>
          <div className="GithubProfile">
            <GithubProfile username="MarissaBeatty" />
            <br />
            <hr />
          </div>
          <div className="GithubSearch">
            <GithubSearch />
            <br />
            <hr />
          </div>
      </div>
    );
  }
}


export default App;
