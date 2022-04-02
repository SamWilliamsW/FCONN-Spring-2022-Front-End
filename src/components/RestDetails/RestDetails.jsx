import React, { useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useHistory, Link } from 'react-router-dom';

import { getRestaurant, getRestaurants } from '../../actions/restaurants';
import useStyles from './styles';


const Restaurant = () => {
    const { restaurant, restaurants, isLoading } = useSelector((state) => state.restaurants);
    const dispatch = useDispatch();
    const history = useHistory();
    const styles = useStyles();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getRestaurants());
        dispatch(getRestaurant(id));
    }, [id]);

    // Log the restaurants
    console.log(restaurants);


    //if (!restaurant) return null;

    const openRestaurant = (_id) => history.push(`/restaurants/${_id}`);

    const CardComponent = ({ restaurants }) => {
        return (
            <>
                {restaurants.map(({ name, address, city, state, zip, _id }) => (
                    // We want it in the center

                    <div className={styles.container}>
                        <div className={styles.card}>
                            <div className={styles.section}>
                                <div style={{ margin: '20px', cursor: 'pointer' }} onClick={() => openRestaurant(_id)} key={_id}>
                                    <Typography gutterBottom variant="h4">{name}</Typography>
                                    <Typography gutterBottom variant="subtitle2">{"Address: " + address}</Typography>
                                    <Typography gutterBottom variant="subtitle2">{"City: " + city}</Typography>
                                    <Typography gutterBottom variant="subtitle2">{"State: " + state}</Typography>
                                    <Typography gutterBottom variant="subtitle2">{"Zip: " + zip}</Typography>

                                </div>
                            </div>
                        </div>
                    </div>

                ))}
            </>
        );
    };


    if (isLoading) {
        return (
            <Paper elevation={6} className={styles.loadingPaper}>
                <CircularProgress size="7em" />
            </Paper>
        );
    } else {

        return (
            <CardComponent restaurants={restaurants} /> // This is our card component defined above. Change stuff in that.
        );
    };
};

export default Restaurant;
