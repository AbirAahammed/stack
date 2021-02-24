import './App.css';
import Search from './search/Search';
import { Component } from 'react';


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Search/>
        </header>
      </div>);
  }
}

export default App;
