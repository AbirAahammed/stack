import React, { useState } from 'react';

import SearchBar from "material-ui-search-bar";

import './Search.css';

function doSomethingWith(state) {
    console.log(state);
}
function Search() {
    const [state, setState] = useState(0);

    return (
        <SearchBar
    value={"Search me"}
    onChange={(newValue) => setState(newValue)}
    // onChange={(newValue) => this.setState({ value: newValue })}
    onRequestSearch={() => doSomethingWith(state)}
  />
    );
}

export default Search;