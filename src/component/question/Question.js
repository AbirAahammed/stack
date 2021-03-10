import './Question.css';
import { useState, useEffect } from "react";
import CircularProgress from '@material-ui/core/CircularProgress';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import ReactHtmlParser from "react-html-parser";
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import HandleComments from '../comment/Comment'


import Answer from '../answer/Answer';

const useStyles = makeStyles((theme) => ({
    root: {
        // width: '50%',
        // backgroundColor:'#ffffff',
        // backgroundColor:'#2d7786',
    },
    accordion: {
        backgroundColor: 'transparent',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        color: '#fff',
    },
    accordSummary: {
        background: '#2d7786',
        borderWidth: '50px',
        borderRadius: '10px',
        overflow: 'auto',

    },
    accordSummaryTitle: {

    },
    accordDetails: {
        textAlign: 'left',
        overflow: 'auto',
        flexDirection: 'column',
        backgroundColor: '#40aabf',
        borderRadius: '10px'
    },
    answer: {
    }
}));
function HandleAnswers(props) {
    const classes = useStyles();
    // const [isLoading, setLoading] = useState(true)
    // const [answer, setAnswer] = useState({ hits: [] });
    // useEffect(() => {
    //     async function fetchData() {
    //         console.log(props)
    //     }
    //     fetchData();

    // }, []);
    var items = []
    // console.log(props.props.answers)
    for (let i = 0; i < props.props.answers.length; i++) {
        items.push(<Answer className={classes.answer} props={props.props.answers[i]} />)
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
    const [isLoading, setLoading] = useState(true)
    const [questionDetails, setQuestionDetails] = useState({ hits: [] });
    useEffect(() => {
        async function fetchData() {
            const url = `https://api.stackexchange.com/2.2/questions/${props.props.question_id}?order=desc&sort=activity&site=stackoverflow&filter=!)rTkraPYPFX1VwYPVrFH`;
            let result = await axios(url);
            setQuestionDetails(result.data);
            setLoading(false);
        }
        if (isLoading){
            fetchData();
        }
        if (!isLoading) {
            console.log(questionDetails.items[0]);
          }

    }, [questionDetails]);
    return (
        <Accordion className={classes.accordion}>
            <AccordionSummary
                className={classes.accordSummary}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id={props.props.question_id}
            >
                <Grid container spacing={1}>
                    <Grid item xs={10}>
                        <Typography className={classes.heading}>{props.props.title}</Typography>
                        <Typography className={classes.heading}>Time: {new Date(props.props.creation_date*1000).toUTCString()}</Typography>

                    </Grid>
                    <Grid item xs={2}>
                        {/* <Container maxWidth="sm"> */}
                            <Typography className={classes.heading}>Score : {props.props.score}</Typography>
                        {/* </Container> */}
                    </Grid>
                </Grid>

                
                

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
                    {!isLoading && questionDetails.items[0].comments !== undefined? <HandleComments comments={questionDetails.items[0].comments}/> :null}

                </Typography>
                {props.props.is_answered === true && !isLoading? <HandleAnswers props={questionDetails.items[0]} /> : null}

            </AccordionDetails>
        </Accordion>
    );
}


// Or [] if effect doesn't need props or state

function Question({ tag }) {
    const [votesData, setVotesData] = useState({ hits: [] });
    const [creationData, setcreationData] = useState({ hits: [] });
    const [isLoading, setLoading] = useState(true)
    const [startTime, setStartTime] = useState(new Date());

    useEffect(() => {
        
        async function fetchData(sort) {
            setLoading(true);
            setStartTime(new Date());
            // const url = `https://api.stackexchange.com/2.2/questions?order=desc&sort=${sort}&site=stackoverflow&filter=!0VdjgZjD(j7sAWyaYznHKJthy&page=1&pagesize=10&tagged=${tag}`
            // const url = `https://api.stackexchange.com/2.2/questions?order=desc&sort=${sort}&site=stackoverflow&filter=!9_bDDxJY5&page=1&pagesize=10&tagged=${tag}`
            
            const url_votes = `https://api.stackexchange.com/2.2/questions?page=1&pagesize=10&fromdate=${(Date.now()/1000) - 604800}&order=desc&sort=votes&tagged=${tag}&site=stackoverflow&filter=!SmM8gcJ5EA-Fj.eW0)`
            // const url_votes = `http://localhost:8000/questions_votes`;
            
            
            // You can await here
            let result = await axios(url_votes);
            setVotesData(result.data);

            const url_creation = `https://api.stackexchange.com/2.2/questions?page=1&pagesize=10&order=desc&sort=creation&tagged=${tag}&site=stackoverflow&filter=!SmM8gcJ5EA-Fj.eW0)`
            // const url_creation = `http://localhost:8000/question_creation`;
            // You can await here
            result = await axios(url_creation);
            setcreationData(result.data);

            setLoading(false);
            // ...
        }
        fetchData('votes');
    }, [tag]);
    if (!isLoading && votesData.items !== undefined && creationData.items !== undefined) {
        let qus = [...votesData.items, ...creationData.items];
        qus.sort((a, b) => (a.creation_date>b.creation_date) ? 1: -1);
        // list.sort((a, b) => (a.color > b.color) ? 1 : -1)
        var items = []
        for (let i = 0; i < qus.length; i++) {
            items.push(<CardQuestion props={qus[i]} />)
        }
        return (
            <div className="question-main">
                {items}
                <div>{new Date() - startTime} ms</div>
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

