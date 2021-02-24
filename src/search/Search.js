import React, { Component } from 'react';

import SearchBar from "material-ui-search-bar";

import './Search.css';
import { render } from '@testing-library/react';


class Search extends Component {
    constructor(props) {
        super(props);
      }

    // doSomethingWith(state) {
    //     console.log(state);
    // }
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