import './Question.css';
import {useState, useEffect } from "react";
import CircularProgress from '@material-ui/core/CircularProgress';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import ReactHtmlParser from "react-html-parser";
import axios from 'axios';


import Answer from '../answer/Answer';

const url = `https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow&filter=!0VdjgZjD(j7sAWyaYznHKJthy&page=1&pagesize=10&tagged=`
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
        textAlign: 'left',
        overflow: 'auto',
        flexDirection: 'column'
    },
    answer: {
    }
}));
function HandleAnswers(props) {
    const classes = useStyles();
    var items = []

    for (let i = 0; i < props.props.length; i++) {
        items.push(<Answer className={classes.answer} props={props.props[i]} />)
    }
    return (
        <div>
            <p>Answers</p>
            {items}
            {/* <h1>Hello</h1> */}
        </div>
    );
}
function CardQuestion(props) {
    const classes = useStyles();
    return (
        <Accordion>
            <AccordionSummary
                className={classes.accordSummary}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id={props.props.question_id}
            >
                <Typography className={classes.heading}>{props.props.title}</Typography>
                <Typography className={classes.heading}>{props.props.score}</Typography>
                <Typography className={classes.heading}>{props.props.creation_date}</Typography>
                {/* <div>{props.name.title} {props.name.score} {props.name.creation_date}</div> */}
            </AccordionSummary>
            <AccordionDetails
                classes={{
                    root: classes.accordDetails, // class name, e.g. `classes-nesting-root-x`
                    label: classes.label, // class name, e.g. `classes-nesting-label-x`
                }}
            >
                <Typography className={classes.accordDetails}>
                    <div>{ReactHtmlParser(props.props.body)}</div>

                </Typography>
                {props.props.is_answered === true ? <HandleAnswers props={props.props.answers} /> : null}

            </AccordionDetails>
        </Accordion>
    );
}


// Or [] if effect doesn't need props or state

function Question({ tag }) {
    const classes = useStyles();
    const [data, setData] = useState({ hits: [] });
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            // You can await here
            const result = await axios(url + tag,
                // `https://api.stackexchange.com/2.2/questions?order=desc&sort=creation&site=stackoverflow&filter=!9_bDDxJY5&tagged=${tag}`,
            );

            setData(result.data);
            setLoading(false);
            // ...
        }
        fetchData();
    }, [tag]);
    if (!isLoading && data.items !== undefined) {
        // if (data.items !== undefined) {
        // for (let index = 0; index < data.items.length; index++) {
        //     console.log(data.items[index].is_answered? data.items[index].answers: "None");            
        // }
        var qus = data.items;
        var items = []
        for (let i = 0; i < 10; i++) {
            items.push(<CardQuestion props={qus[i]} />)
        }
        return (
            <div className="question-main">
                {items}
                {/* <h1>Hello</h1> */}
            </div>
        );
    } else {
        return (
            <div className="question-main">
                <CircularProgress className="circular-progress" color="secondary" thickness={1.0} size={150} />
            </div>
        );
    }
}

export default Question;