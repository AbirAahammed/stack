import './App.css';
import Search from './component/search/Search';
import { Component } from 'react';
import Question from './component/question/Question';







class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      tag: "",
    };
    this.handler = this.handler.bind(this);

  }
  
  handler(searchTag){
    this.setState({tag: searchTag});
  }

  render() {
    if (this.state.tag !=="") {
      console.log(this.state.tag);
      return (
        <div className="App">
          <header className="App-header">
          <Search placeholder="Search" handler = {this.handler} />
          <Question tag = {this.state.tag}/>
          </header>
        </div>);
    } else {
      return (
        <div className="App">
          <header className="App-header">
          <Search placeholder="Search" handler = {this.handler} />
          </header>
        </div>);
    }
  }
}

export default App;
