import React from 'react';
import {connect} from 'react-redux';

import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';

import {getData} from '../actions';

const Buttons = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
}));

const progressBar = makeStyles(theme => ({
    root: {
        '& > * + *': {
            margin: '0 auto',
        },
    },
}));

const AnimeForm = (props) => {

    const barclasses = progressBar();
    const classes = Buttons();

    const handleFetchData = e => {
        e.preventDefault();
        props.getData();
    }

    return (
        <div>
            {props.isFetchingData ? (
                <div className={barclasses.root}>
                    <CircularProgress color="secondary" />
                </div>
                ) : (
                <Button
                onClick = { handleFetchData }
                variant = "contained"
                color= "default"
                className = {classes.button}
                endIcon={<Icon>send</Icon>}
                > Send for Data </Button>
            )}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    }
}

export default connect(
    mapStateToProps, 
    { getData }
    )(AnimeForm);