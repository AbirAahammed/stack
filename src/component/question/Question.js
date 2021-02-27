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

const useStyles = makeStyles((theme) => ({
    root: {
        width: '50%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        color: '#3966ac',
    },
    accordSummary: {
        background: '#070707',
        borderWidth: '50px',
        width: ''
    },
    accordDetails : {
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
            </AccordionSummary>
            <AccordionDetails>
                <Typography className={classes.accordDetails}>
                    <div>{ReactHtmlParser(props.name.body)}</div>

                </Typography>
            </AccordionDetails>
        </Accordion>
    );
}

class Question extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questions: null
        }
    }
    componentDidMount() {
        let url = 'https://api.stackexchange.com/2.2/questions?order=desc&sort=creation&site=stackoverflow&filter=!9_bDDxJY5&tagged=' + this.props.tag;

        fetch(url)
            .then(res => res.json())
            .then((data) => {
                this.setState({ questions: data })
            })
    }

    render() {
        if (this.state.questions != null) {
            let qus = this.state.questions.items;
            const items = []
            for (let i = 0; i < 10; i++) {
                items.push(<CardQuestion name={qus[i]} key={qus[i].question_id} />)
            }
            return (
                <div className="question-main">
                    {items}
                </div>

            );
        }
        return (
            <div className="question-main">
                <CircularProgress />
            </div>

        );

    }
}

export default Question;