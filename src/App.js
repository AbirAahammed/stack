import './App.css';
import Search from './component/search/Search';
import { useState } from 'react';
import Question from './component/question/Question';

import AppBar from '@material-ui/core/AppBar';

import SearchBar from "material-ui-search-bar";

import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    height: '40px',
    marginBottom: '20px',

  },

  title: {
    // flexGrow: 1,
    marginBottom: '25px',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Times New Roman'
  },
  appbar :{
    height: '40px',
  },
  searchbar : {
    
  }
}));


export default function App() {
  const classes = useStyles();

  const [tag, setTag] = useState('');
  if (tag !== "") {
    return (
      <>
        <div className="App">

          <div className={classes.root}>
            <AppBar position="static" className={classes.appbar}>
              <Toolbar>
                <Typography variant="h6" className={classes.title}>
                  Stack
                </Typography>
              </Toolbar>
            </AppBar>
          </div>
          <header className="App-header-after">
            <SearchBar
              placeholder='Search me'
              className='searchbar'
              // onChange={(newValue) => this.props.placeholder = newValue}
              // onChange={(newValue) => setState({ searchTag: newValue })}
              onRequestSearch={(newValue) => setTag(newValue)}
            />            <div className="App-questions">
              <Question tag={tag} />
            </div>
          </header>
        </div>
      </>);
  } else {
    return (
      <>
        <div className="App">

          <div className={classes.root}>
            <AppBar position="static" className={classes.appbar}>
              <Toolbar>

                <Typography className={classes.title}>
                  Stack
          </Typography>
              </Toolbar>
            </AppBar>
          </div>

          <header className="App-header">
            <SearchBar
              placeholder='Search me'
              className='searchbar'
              // onChange={(newValue) => this.props.placeholder = newValue}
              // onChange={(newValue) => setState({ searchTag: newValue })}
              onRequestSearch={(newValue) => setTag(newValue)}
            />
          </header>
        </div></>
    );
  }

}

