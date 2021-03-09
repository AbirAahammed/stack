import './App.css';
import { useState, useEffect } from 'react';
import Question from './component/question/Question';

import AppBar from '@material-ui/core/AppBar';

import SearchBar from "material-ui-search-bar";

import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';



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
    backgroundColor:'green',
  }
}));


export default function App() {
  const classes = useStyles();
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  const [tag, setTag] = useState('');
  console.log(new Date());
  useEffect(() => {
    setEnd(new Date())
    // const interval = setInterval(
    //   () => setValue(new Date()),
    //   1000
    // );
 
    // return () => {
    //   clearInterval(interval);
    // }
  }, [tag]);
  if (tag !== "") {
    return (
      <>
        <div className="App">

          <div className={classes.root}>
            <AppBar position="fixed" className={classes.appbar}>
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
              onRequestSearch={(newValue) => setTag(newValue)}
            />            <div className="App-questions">
              <Question tag={tag} />
            </div>
          </header>
          <p>Current time:</p>
      {/* <Clock value={value} /> */}
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
          <p>Current time:</p>
        </div></>
    );
  }

}

