import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

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
    }} elevation={10} square={false} variant="outlined" ><div>{props.comment.body}</div></Paper>
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