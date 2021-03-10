import './Answer.css';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactHtmlParser from "react-html-parser";

import Paper from '@material-ui/core/Paper';
import HandleComments from '../comment/Comment'
import axios from 'axios';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: '15'
  },
  paper: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    backgroundColor: '#79c3d2',
    padding: '20px',
    borderRadius: '15px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(13),
    fontWeight: theme.typography.fontWeightBold,
    marginTop: '10px',
    
  },
  rounded: {
  }

}));


function Answer(props) {
  const classes = useStyles();
  const [isLoading, setLoading] = useState(false)
  const [answer, setAnswer] = useState({ hits: [] });

  return (
    <Paper classes={{
      root: classes.paper, // class name, e.g. `classes-nesting-root-x`
      label: classes.label, // class name, e.g. `classes-nesting-label-x`
      rounded: classes.rounded
    }} elevation={10} square={false} variant="outlined" >
        <div>{!isLoading ? ReactHtmlParser(props.props.body) : <div>isLoading....</div>}</div>
        <Grid container spacing={1} className = {classes.heading}>

        <Grid item xl >
          <Typography variant={'inherit'}>Time: {new Date(props.props.creation_date * 1000).toUTCString()}</Typography>
        </Grid>
        <Grid item xs>
          <Typography variant={'inherit'}>Score : {props.props.score}</Typography>
        </Grid>
      </Grid>
        {!isLoading && props.props.comments !== undefined ? <HandleComments comments={props.props.comments} /> : null}



    </Paper>
  );


}

export default Answer;