import './Answer.css';
import { makeStyles } from '@material-ui/core/styles';
import ReactHtmlParser from "react-html-parser";

import Paper from '@material-ui/core/Paper';
import HandleComments from '../comment/Comment'
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

  return (
    <Paper classes={{
      root: classes.paper, // class name, e.g. `classes-nesting-root-x`
      label: classes.label, // class name, e.g. `classes-nesting-label-x`
      rounded: classes.rounded
    }} elevation={10} square={false} variant="outlined" >
      <div>{ReactHtmlParser(props.props.body)}</div>
      <Grid container spacing={1} className={classes.heading}>

        <Grid item xl >
          <Typography variant={'inherit'}>Time: {new Date(props.props.creation_date * 1000).toUTCString()}</Typography>
        </Grid>
        <Grid item xs>
          <Typography variant={'inherit'}>Score : {props.props.score}</Typography>
        </Grid>
      </Grid>
      {props.props.comments !== undefined ? <HandleComments comments={props.props.comments} /> : null}
    </Paper>
  );


}

export default Answer;