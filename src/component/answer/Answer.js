import './Answer.css';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactHtmlParser from "react-html-parser";

import Paper from '@material-ui/core/Paper';
import HandleComments from '../comment/Comment'
import axios from 'axios';
import LinearProgress from '@material-ui/core/LinearProgress';

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

  useEffect(() => {
    async function fetchData(id) {
      // const url = `https://api.stackexchange.com/2.2/answers/{id}?order=desc&sort=activity&site=stackoverflow&filter=!b6Aubk6cwNOqa9`;
      const url = `http://localhost:8000/answer`;
      const result = await axios(url);
      setAnswer(result.data);
      setLoading(false);
    }
    if (isLoading){
      fetchData(props.props.answer_id);
    }
    if (!isLoading) {
      console.log('Load complete');
      console.log(answer.items[0]);
    }
  }, [answer]);
    return (
      <Paper classes={{
        root: classes.paper, // class name, e.g. `classes-nesting-root-x`
        label: classes.label, // class name, e.g. `classes-nesting-label-x`
        rounded: classes.rounded
      }} elevation={10} square={false} variant="outlined" ><div>{ !isLoading  ? ReactHtmlParser(answer.items[0].body) : <LinearProgress />}</div>
        {/* <HandleComments comments={props.props.comments}/> */}
        {/* props.props.answer_id */}
        {!isLoading? <HandleComments comments={answer.items[0].comments} /> : null}
  
      </Paper>
    );


}

export default Answer;