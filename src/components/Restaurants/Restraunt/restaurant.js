import React, { useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase, StepIcon } from '@material-ui/core/';
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
  const [likes, setLikes] = useState(restaurant?.likes);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const userId = user?.result?.googleId || user?.result?._id;
//   const hasLikedPost = post.likes.find((like) => like === userId);


  const openrestaurant = (e) => {
    // dispatch(getrestaurant(restaurant._id, history));

    history.push(`/restaurants/${restaurant._id}`);
  };

  return (
    
    console.log(restaurant.name),
    <Card className={classes.card} raised elevation={6}>
      <ButtonBase
        component="span"
        name="test"
        className={classes.cardAction}
        onClick={openrestaurant}
      >
        <CardMedia className={classes.media} image={restaurant.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={restaurant.title} />
        <div className={classes.overlay}>
          <Typography variant="h6">{restaurant.name}</Typography>
          <Typography variant="body2">{moment(restaurant.createdAt).fromNow()}</Typography>
        </div>
              {(user?.result?.googleId === restaurant?.creator || user?.result?._id === restaurant?.creator || user?.result?.isAdmin === true) && (
        <div className={classes.overlay2} name="edit">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              setCurrentId(restaurant._id);
            }}
            style={{ color: 'white' }}
            size="small"
          >
            <MoreHorizIcon fontSize="medium" />
          </Button>
        </div>
        )}
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">{restaurant.tags.map((tag) => `#${tag} `)}</Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">{restaurant.title}</Typography>
        <Typography variant="body2">{console.log(restaurant.name)}</Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">{restaurant.message.split(' ').splice(0, 20).join(' ')}...</Typography>
        </CardContent>
      </ButtonBase>
      
    </Card>

  );
  
};

export default Restaurant;