import './Question.css';
import { Component } from "react";
import CircularProgress from '@material-ui/core/CircularProgress';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import ReactHtmlParser from "react-html-parser";
import { useAsync } from 'react-async';

const useStyles = makeStyles((theme) => ({
    root: {
        // width: '50%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        color: '#3966ac',
        textAlign: 'center'
    },
    accordSummary: {
        background: '#070707',
        borderWidth: '50px',
    },
    accordDetails: {
        textAlign: 'left'
    },

}));
function CardQuestion(props) {
    const classes = useStyles();
    return (
        <Accordion>
            <AccordionSummary
                className={classes.accordSummary}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id={props.question_id}>
                <Typography className={classes.heading}>{props.name.title}</Typography>
                <Typography className={classes.heading}>{props.name.score}</Typography>
                <Typography className={classes.heading}>{props.name.creation_date}</Typography>
                {/* <div>{props.name.title} {props.name.score} {props.name.creation_date}</div> */}
            </AccordionSummary>
            <AccordionDetails>
                <Typography className={classes.accordDetails}>
                    <div>{ReactHtmlParser(props.name.body)}</div>

                </Typography>
            </AccordionDetails>
        </Accordion>
    );
}

// const loadPlayer = async ({ playerId }, { signal }) => {
//     const res = await fetch(`/api/players/${playerId}`, { signal })
//     if (!res.ok) throw new Error(res.statusText)
//     return res.json()
//   }

  
// Then we'll fetch user data from this API
const loadQuestions = async ({tag}) =>
    await fetch(`https://api.stackexchange.com/2.2/questions?order=desc&sort=creation&site=stackoverflow&filter=!9_bDDxJY5&tagged=${tag}`)
        .then(res => (res.ok ? res : Promise.reject(res)))
        .then(res => res.json())
        .then(console.log('URL : ', `https://api.stackexchange.com/2.2/questions?order=desc&sort=creation&site=stackoverflow&filter=!9_bDDxJY5&tagged=${tag}`))

function Question({tag}) {
    console.log("Question Tag", tag);
    const { data, error, isLoading } = useAsync({ promiseFn: loadQuestions, tag: tag })
    if (isLoading) {
        return (
            <div className="question-main">
                <CircularProgress />
            </div>
        );
    }
    if (error) return `Something went wrong: ${error.message}`
    if (data) {
        var qus = data.items;
        var items = []
        for (let i = 0; i < 10; i++) {
            items.push(<CardQuestion name={qus[i]} key={qus[i].question_id} />)
        }
        return (
            <div className="question-main">
                {items}
                {/* <h1>Hello</h1> */}
            </div>
        );
    }
}

export default Question;