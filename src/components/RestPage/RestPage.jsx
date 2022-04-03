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
                    {restaurant.dinein ? <Typography variant="subtitle2" gutterBottom>Dine In</Typography> : null}
                    {restaurant.takeout ? <Typography variant="subtitle2" gutterBottom>Take Out</Typography> : null}
                    {restaurant.delivery ? <Typography variant="subtitle2" gutterBottom>Delivery</Typography> : null}
                </div>

                <div className={styles.section}>
                <div>Tags: </div>
                {restaurant.tags.map((tag) => ( 
                        <Typography variant="subtitle5">{tag} </Typography>
                ))}
                </div>

                
                <div className={styles.card}>
                    <div className={styles.section}>
                        <Typography gutterBottom variant="h5">Restaurant Hours</Typography>
                        <Typography gutterBottom variant="subtitle2"> Sunday: {restaurant.businessHoursStart[0]} - {restaurant.businessHoursEnd[0]}  </Typography>
                        <Typography gutterBottom variant="subtitle2"> Monday: {restaurant.businessHoursStart[1]} - {restaurant.businessHoursEnd[1]}  </Typography>
                        <Typography gutterBottom variant="subtitle2"> Tuesday: {restaurant.businessHoursStart[2]} - {restaurant.businessHoursEnd[2]}  </Typography>
                        <Typography gutterBottom variant="subtitle2"> Wednesday: {restaurant.businessHoursStart[3]} - {restaurant.businessHoursEnd[3]}  </Typography>
                        <Typography gutterBottom variant="subtitle2"> Thursday: {restaurant.businessHoursStart[4]} - {restaurant.businessHoursEnd[4]}  </Typography>
                        <Typography gutterBottom variant="subtitle2"> Friday: {restaurant.businessHoursStart[5]} - {restaurant.businessHoursEnd[5]}  </Typography>
                        <Typography gutterBottom variant="subtitle2"> Saturday: {restaurant.businessHoursStart[6]} - {restaurant.businessHoursEnd[6]}  </Typography>
                    </div>

                    
                    
                    <div className={styles.section}>
                        <Typography gutterBottom variant="h5">Contact Info</Typography>
                        <Typography gutterBottom variant="subtitle2">{restaurant.address}</Typography>
                        <Typography gutterBottom variant="subtitle2">{restaurant.city}, {restaurant.state} {restaurant.zip}</Typography>
                        <Typography gutterBottom variant="subtitle2">{restaurant.phone}</Typography>
                    </div>

                </div>

                <div className={styles.center}>
                    <Link to={restaurant.menuLink}>
                        <Typography variant="h5" gutterBottom>See our menu</Typography>
                    </Link>
                </div>
                </div>
            
            </>
        );
    };
};

export default RestaurantPage;
