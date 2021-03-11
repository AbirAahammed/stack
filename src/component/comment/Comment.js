import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: '15'
  },
  paper: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    backgroundColor: '#b3dde5',
    padding: '20px',
    borderRadius: '15px',
    overflow: 'auto'
  },
  heading: {
    fontSize: theme.typography.pxToRem(13),
    fontWeight: theme.typography.fontWeightBold,
    marginTop: '10px',
    
  },
  rounded: {
  }

}));

function Comment(props) {
  const classes = useStyles();
  return (
    <Paper classes={{
      root: classes.paper, // class name, e.g. `classes-nesting-root-x`
      label: classes.label, // class name, e.g. `classes-nesting-label-x`
      rounded: classes.rounded
    }} elevation={10} square={false} variant="outlined" >
      <div>{props.comment.body}</div>
      <Grid item xs={10}>
        {props.comment.body}
      </Grid>
      <Grid container spacing={1} className = {classes.heading}>

        <Grid item xl >
          <Typography variant={'inherit'}>Time: {new Date(props.comment.creation_date * 1000).toUTCString()}</Typography>
        </Grid>
        <Grid item xs>
          <Typography variant={'inherit'}>Score : {props.comment.score}</Typography>
        </Grid>
      </Grid>

    </Paper>
  )
}

export default function HandleComments(props) {
  const classes = useStyles();
  var items = []
  for (let i = 0; i < props.comments.length; i++) {
    items.push(<Comment className={classes.answer} comment={props.comments[i]} />)
  }
  return (
    <div>
      <p>Comments</p>
      {items}
      {/* <h1>Hello</h1> */}
    </div>
  );
}
// function Comment(props) {
//   const classes = useStyles();

// }