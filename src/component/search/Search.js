import React, { Component } from 'react';

import SearchBar from "material-ui-search-bar";

import './Search.css';


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTag: "",
    };

  }

    render() {
        return (
        <SearchBar
          placeholder='Search me'
          // onChange={(newValue) => this.props.placeholder = newValue}
          onChange={(newValue) => this.setState({ searchTag: newValue })}
          onRequestSearch={() => this.props.handler(this.state.searchTag)}
      />
        );
    }
    
}

export default Search;