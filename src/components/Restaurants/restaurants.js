import React, { useState } from 'react';
// import { Container, Grow, Grid, AppBar, TextField, Button, Paper } from '@material-ui/core';
// import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
// import ChipInput from 'material-ui-chip-input';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase, StepIcon } from '@material-ui/core/';
import { getRestaurant } from '../../actions/restaurants';

// import { getPostsBySearch } from '../../actions/restaurants';
// import Posts from '../Posts/posts';
// import Form from '../Form/form';
// import Pagination from '../Pagination';
import useStyles from './styles';
import restraunts from '../../reducers/restraunts';


function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Restraunt = ({ restraunt }) => {
  // const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const [name, data] = useState();


  // const userId = user?.result?.googleId || user?.result?._id;
  // const hasLikedPost = post.likes.find((like) => like === userId);



  return (

    const query = useQuery();
    // <Card>
    //   <div className={classes.overlay}>
    //     <Typography variant="h6">{restraunts.name}</Typography>
    //   </div>
     
    //   <CardContent>
    //     <Typography variant="body2" color="textSecondary" component="p">{restraunts.message.split(' ').splice(0, 20).join(' ')}...</Typography>
    //   </CardContent>
    

    // </Card>
        //testing
        
        console.log(restraunt.name),
        <Restraunt>
          <h3>"wow"</h3>
        </Restraunt>
        
);
  
};

export default Restraunts;

// import React from 'react';
// import { Grid, CircularProgress } from '@material-ui/core';
// import { useSelector } from 'react-redux';

// import Post from './Restraunt/restraunt';
// import useStyles from './styles';

// const Posts = ({ setCurrentId }) => {
//   const { posts, isLoading } = useSelector((state) => state.posts);
//   const classes = useStyles();

//   if (!posts.length && !isLoading) return 'No posts';

//   return (
//     isLoading ? <CircularProgress /> : (
//       <Grid container alignItems="stretch" spacing={3}>
//         {posts?.map((post) => (
//           <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
//             <p>
// alert( 'Hello, world!' );
// </p> 
//           </Grid>
//         ))}
//       </Grid>
//     )
//   );
// };

// export default Posts;
