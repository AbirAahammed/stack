import './Answer.css';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ReactHtmlParser from "react-html-parser";

import Paper from '@material-ui/core/Paper';
import HandleComments from '../comment/Comment'

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
  rounded: {
  }

}));


function Answer(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Paper classes={{
      root: classes.paper, // class name, e.g. `classes-nesting-root-x`
      label: classes.label, // class name, e.g. `classes-nesting-label-x`
      rounded: classes.rounded
    }} elevation={10} square={false} variant="outlined" ><div>{ReactHtmlParser(props.props.body)}</div>
    {/* <HandleComments comments={props.props.comments}/> */}
    {props.props.comments !== undefined ? <HandleComments comments={props.props.comments}/> : null}

    </Paper>
  );

}

export default Answer;