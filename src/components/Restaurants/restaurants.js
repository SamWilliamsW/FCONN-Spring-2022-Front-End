import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

import Restaurant from './Restaurant/restaurant';
import useStyles from './styles';
import { getRestaurants } from '../../actions/restaurants';

const Restaurants = ({ setCurrentId }) => {



  const { restaurants, isLoading } = useSelector((state) => state.restaurants);
  const classes = useStyles();
  

  if (!restaurants.length && !isLoading) return 'No restaurants';

  // Log the restaurants to the console
  return (
    isLoading ? <CircularProgress /> : (
      <Grid container alignItems="stretch" spacing={3}>
        {restaurants?.map((restaurant) => (
          <Grid key={restaurant._id} item xs={12} sm={12} md={6} lg={3}> 
            <Restaurant restaurant={restaurant} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Restaurants;
