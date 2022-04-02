import React, { useState } from 'react';
import { Paper, Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase, StepIcon } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { useHistory } from 'react-router-dom';


// import { likePost, deletePost, reportPost } from '../../../actions/posts';
import useStyles from './styles';

const Restaurant = ({ restaurant, setCurrentId }) => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  //const userId = user?.result?.googleId || user?.result?._id;
//   const hasLikedPost = post.likes.find((like) => like === userId);



  const openRestaurant = (e) => {
    //dispatch(getrestaurant(restaurant._id, history));

    history.push(`/restaurants/${restaurant._id}`);
  };

  return (



<Card className={classes.card} raised elevation={6}>
      <ButtonBase
        component="span"
        name="test"
        className={classes.cardAction}
        onClick={openRestaurant}
      >
        <CardMedia className={classes.media} image={'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={restaurant.name} />
        <div className={classes.overlay}>
          <Typography variant="h6">{restaurant.name}</Typography>
          <Typography variant="body2">{"Nothing"}</Typography>
        </div>
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">{"Nope"}</Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">{restaurant.name}</Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">{restaurant.address}...</Typography>
        </CardContent>
      </ButtonBase>
    </Card>

  );
  
};

export default Restaurant;