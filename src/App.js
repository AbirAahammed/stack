import './App.css';
import Search from './component/search/Search';
import { Component } from 'react';
import Question from './component/question/Question';



import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiTypography: {
      // Name of the rule
      root: {
        // Some CSS
        marginBottom: 'auto',
        color: 'aqua'
      },
    },
  },
});

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tag: "",
    };
    this.handler = this.handler.bind(this);

  }

  handler(searchTag) {
    this.setState({ tag: searchTag });
  }

  render() {
    if (this.state.tag !== "") {
      console.log(this.state.tag);
      return (
        <>
          <div className="App">

          <AppBar position="static" classes={{ root: 'appbar' }} >
              {/* <Toolbar className='bar'> */}
                {/* <Typography variant={'h4'} className='title' classes={{ root: 'title-root' }}> */}
                  Stack
                {/* </Typography> */}
              {/* </Toolbar> */}
            </AppBar>
            <header className="App-header-after">
              <Search placeholder="Search" handler={this.handler} />
              <div className="App-questions">
                <Question tag={this.state.tag} />
              </div>
            </header>
          </div></>);
    } else {
      return (
        <>
          <div className="App">

            <AppBar position="static" classes={{ root: 'appbar' }} >
              {/* <Toolbar className='bar'> */}
                {/* <Typography variant={'h4'} className='title' classes={{ root: 'title-root' }}> */}
                  Stack
                {/* </Typography> */}
              {/* </Toolbar> */}
            </AppBar>

            <header className="App-header">
              <Search placeholder="Search" handler={this.handler} />
            </header>
          </div></>
      );
    }
  }
}

export default App;
