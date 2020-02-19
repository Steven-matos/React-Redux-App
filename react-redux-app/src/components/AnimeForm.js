import React from 'react';
import {connect} from 'react-redux';

import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
}));

const AnimeForm = () => {
    
    const classes = useStyles();

    const handleFetchData = e => {
        e.preventDefault();
    }

    return (
        <div>
        <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<Icon>send</Icon>}
        >
        Send
        </Button>
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
    { }
    )(AnimeForm);