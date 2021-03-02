import './Question.css';
import { Component, useState, useEffect } from "react";
import CircularProgress from '@material-ui/core/CircularProgress';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import ReactHtmlParser from "react-html-parser";
import { useAsync } from 'react-async';
import axios from 'axios';

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


function Question({tag}) {
    const [data, setData] = useState({ hits: [] });
    useEffect(async () => {
        const fetchData = async () => {
            const result = await axios(
              `https://api.stackexchange.com/2.2/questions?order=desc&sort=creation&site=stackoverflow&filter=!9_bDDxJY5&tagged=${tag}`,
            );
       
            setData(result.data);
        };
        fetchData();

      }, [tag]);
    if (data.items !== undefined) {
        console.log(data);
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
    } else {
        return (
            <div className="question-main">
                <CircularProgress />
            </div>
        );
    }
}

export default Question;