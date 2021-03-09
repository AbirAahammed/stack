import './Answer.css';
import {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactHtmlParser from "react-html-parser";

import Paper from '@material-ui/core/Paper';
import HandleComments from '../comment/Comment'
import axios from 'axios';

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
  const [isLoading, setLoading] = useState(true)
  const [answer, setAnswer] = useState({ hits: [] });


  return (
    <Paper classes={{
      root: classes.paper, // class name, e.g. `classes-nesting-root-x`
      label: classes.label, // class name, e.g. `classes-nesting-label-x`
      rounded: classes.rounded
    }} elevation={10} square={false} variant="outlined" ><div>{props.props.body !== undefined ? ReactHtmlParser(props.props.body) : props.props.answer_id}</div>
      {/* <HandleComments comments={props.props.comments}/> */}
      {props.props.comments !== undefined ? <HandleComments comments={props.props.comments} /> : null}

    </Paper>
  );

}

export default Answer;