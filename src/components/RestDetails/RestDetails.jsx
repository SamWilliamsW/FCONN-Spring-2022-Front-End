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

  if (isLoading) {
    return (
      <Paper elevation={6} className={styles.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  } else {

    return (
        <Paper className={styles.container} elevation={6}>
          <div className={styles.card}>
            <div className={styles.section}>
              <Typography variant="h3" component="h2">{restaurants[0].name}</Typography>
              <Typography className={styles.message} gutterBottom variant="body1" component="p">{restaurants[0].address}</Typography>
              <Typography className={styles.message} gutterBottom variant="body1" component="p">{restaurants[0].city}</Typography>
                <Typography className={styles.message} gutterBottom variant="body1" component="p">{restaurants[0].state}</Typography>
                <Typography className={styles.message} gutterBottom variant="body1" component="p">{restaurants[0].zip}</Typography>
                <Typography className={styles.message} gutterBottom variant="body1" component="p">{restaurants[0].phone}</Typography>

            </div>
          </div>
        </Paper>
      );
    };
};

export default Restaurant;
