import React, { Component } from 'react';

import SearchBar from "material-ui-search-bar";

import './Search.css';


class Search extends Component {
    doSomethingWith = (state) => {
        console.log(state);
      };

    render() {
        return (
        <SearchBar
          value={this.props.placeholder}
          onChange={(newValue) => this.props.placeholder = newValue}
          // onChange={(newValue) => this.setState({ value: newValue })}
          onRequestSearch={() => this.doSomethingWith(this.props.placeholder)}
      />
        );
    }
    
}

export default Search;