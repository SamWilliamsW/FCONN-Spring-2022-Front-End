import React, { useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useHistory, Link } from 'react-router-dom';

import { getRestaurant, getRestaurants } from '../../actions/restaurants';
import useStyles from './styles';


const RestaurantPage = () => {
    const { restaurants, isLoading } = useSelector((state) => state.restaurants);
    const dispatch = useDispatch();
    const history = useHistory();
    const styles = useStyles();
    const { id } = useParams();
    useEffect(() => {
        dispatch(getRestaurants());
    }, []);

    // Find the restaurant with the id from the restaurants array
    // This should be changed to use the getRestaurant action at some point
    const restaurant = restaurants.find((restaurant) => restaurant._id === id);

    


    if (isLoading) {
        return (
            <Paper elevation={6} className={styles.loadingPaper}>
                <CircularProgress size="7em" />
            </Paper>
        );
    } else {

        return (
            <>
            <div className={styles.container}>

                <div className={styles.center}>
                    <Typography variant="h4" gutterBottom>{restaurant.name}</Typography>
                </div>

                <div className={styles.center}>
                <Typography variant="subtitle2" gutterBottom>{"Put food info here. "}</Typography>
                </div>
                
                <div className={styles.card}>
                    <Typography gutterBottom variant="h5">Restaurant Hours</Typography>
                    <div className={styles.section}>
                        <Typography gutterBottom variant="subtitle2">"Hours go here"</Typography>
                    </div>

                    <Typography gutterBottom variant="h5">Restaurant Address</Typography>
                </div>
                </div>
            </>
        );
    };
};

export default RestaurantPage;
