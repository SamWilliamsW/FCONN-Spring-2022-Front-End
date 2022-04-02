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
            {restaurants.map(({ name, address, city, state, _id }) => (
                <div style={{ margin: '20px', cursor: 'pointer' }} onClick={() => openRestaurant(_id)} key={_id}>
                    <Typography gutterBottom variant="h6">{name}</Typography>
                    <Typography gutterBottom variant="subtitle2">{address}</Typography>
                    <Typography gutterBottom variant="subtitle2">{city}</Typography>
                    <Typography gutterBottom variant="subtitle2">{state}</Typography>
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
        <CardComponent restaurants={restaurants} />
    );
  };
};

export default Restaurant;
