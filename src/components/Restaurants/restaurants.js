import React, { useState } from 'react';
// import { Container, Grow, Grid, AppBar, TextField, Button, Paper } from '@material-ui/core';
// import { useDispatch } from 'react-redux';
import { BrowserRouter, useHistory, useLocation } from 'react-router-dom';
// import ChipInput from 'material-ui-chip-input';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase, StepIcon } from '@material-ui/core/';
import { getRestaurant } from '../../actions/restaurants';

// import { getPostsBySearch } from '../../actions/restaurants';
// import Posts from '../Posts/posts';
// import Form from '../Form/form';
// import Pagination from '../Pagination';
import useStyles from './styles';
import restaurants from '../../reducers/restaurants';
import { fetchRestaurant } from '../../api/index.js';


function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Restaurants = ({ restaurant }) => {
  // const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const [name, data] = useState();

  // useEffect(() => {
  //   fetch('name').then(response => {
  //     setData(response.json())
  //   })
  // }, [])



  return (

    <Card>
        {/* //testing
        // console.log(restaurant.name), */}

        <div className={classes.overlay}>
          <Typography variant="h6">{restaurant.name}</Typography>
          <Typography variant="body2">{console.log(restaurant.name)}</Typography>
        </div>
        {/* // <Restaurants>
        //   <h3>"wow"</h3>
        // </Restaurants> */}
    </Card>
      
);
  
};

export default Restaurants;
