import React from 'react';
import {connect} from 'react-redux';

//Styling
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
        maxWidth: 600,
        margin: '1rem',
        boxShadow: '3px 3px 15px 1px rgba(0,0,0,0.4)',
    },
    media: {
        height: 140,
    },
    button: {
        margin: '0 0 0 auto',
        color: 'white',
    },
    footer: {
        background: '#e2434b',
        margin: '0 auto',
        color: 'white',
    },
    content: {
        background: '#f9bf8f',
    },
    heading: {
        margin: '0 auto',
    }
});

const AnimeCards = props => {
    const classes = useStyles();

    return (
        <div className="main-container">
            
                {props.error ? (
                    <div className="error">{props.error}</div>
                ) : (
                    props.anime.map(anime =>
                        <Grid item xs={3}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardActions className={classes.footer}><Typography className={classes.heading} gutterBottom variant="h5" component="h2">{anime.title}</Typography></CardActions>
                                    <CardMedia
                                        className={classes.media}
                                        image={anime.image_url}
                                        title={anime.title}
                                    />
                                    <CardContent className={classes.content}>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Episodes: {anime.episodes} <br/>
                                            Start Date: {anime.start_date} <br/>
                                            End Date: {anime.end_date} <br/>
                                            Score: {anime.score} / 10
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions className={classes.footer}>
                                    <Button className={classes.button} size="small" href={anime.url} target='_blank'>
                                        Learn More
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                )}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        anime: state.anime,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    { }
    )(AnimeCards);