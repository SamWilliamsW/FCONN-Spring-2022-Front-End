import React, { useEffect } from 'react';
import { Grid, Paper, Typography, CircularProgress, Divider } from '@material-ui/core/';
// import { Rating } from 'material-ui-rating' // For when we can add ratings (if we can, legally?)
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useHistory, Link } from 'react-router-dom';

import { getRestaurant, getRestaurants } from '../../actions/restaurants';
import useStyles from './styles';

// This is the component that will be rendered when the user clicks on a restaurant
const Restaurant = () => {
    const { restaurant, restaurants, isLoading } = useSelector((state) => state.restaurants);
    const dispatch = useDispatch();
    const history = useHistory();
    const styles = useStyles();
    const { id } = useParams();


    // We dispatch the getRestaurants action to get all the restaurants. 
    // The getRestaurant action is also dispatched to get the restaurant with the id from the restaurants array
    useEffect(() => {
        dispatch(getRestaurants());
        dispatch(getRestaurant(id));
    }, [id]);

    // Log the restaurants
    console.log(restaurants);



    // Find the restaurant with the id from the restaurants array
    const openRestaurant = (_id) => history.push(`/restaurants/${_id}`);

    const CardContent = ({ name, address, city, phone, _id, tags }) => {

        return (
            <>
            <div className={styles.container}>
                <div style={{ margin: '20px', cursor: 'pointer' }} onClick={() => openRestaurant(_id)} key={_id}>
                    <Typography gutterBottom variant="h4">{name}</Typography>
                    {/* <Rating
                         name="simple-controlled"
                         value={value}
                         onChange={(event, newValue) => {
                           setValue(newValue);
                         }}
                    />
                    <Rating name="no-value" value={null} /> */}
                    <Typography />
                    <Typography gutterBottom variant="subtitle2">{address + ", " + city}</Typography>
                    <Link className={styles.phone} href={phone}>
                        <Typography gutterBottom variant="subtitle2">{"Phone: " + phone}</Typography>
                    </Link>

                    <div className={styles.tags}>
                        <Typography>{"Tags " + tags}</Typography>
                    </div>
                </div>
             </div>
            </>
        );
    };


    // The CardComponent is set up such that it will only render approved restaurants.
    // If you want to add additional information to the card, make sure you map it and pass it to the CardContent component.
    const CardComponent = ({ restaurants }) => {

        return (
        <>
            {restaurants.map(({ name, address, city, phone,  _id, tags, approved }) => (

                approved ? (
                    <CardContent name={name} address={address} city={city} phone={phone} _id={_id} tags={tags} />
            ) : null
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
        // This is our card component defined above. Change stuff in that.
            <Grid container  spacing={3} className={styles.gridContainer}>
                <CardComponent restaurants={restaurants} /> 
            </Grid>
        );
    };
};

export default Restaurant;
