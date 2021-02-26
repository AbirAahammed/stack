import './App.css';
import Search from './component/search/Search';
import { Component } from 'react';
import Question from './component/question/Question';


class App extends Component {
  
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Search/>
        <Question tag = 'java'/>
        </header>
      </div>);
  }
}

export default App;
