import { getRestaurant } from '../../actions/restaurants';

import React from 'react';
import { Card, Grid, CardMedia, CardContent, CardActions, Button, Typography, CardActionArea } from '@material-ui/core';
import { useSelector } from 'react-redux';

import useStyles from './styles';
import restaurants from '../../reducers/restaurants';
import { fetchRestaurant } from '../../api/index.js';
import Restaurant from './Restraunt/restaurant';

const Restaurants = ({ setCurrentId }) => {
  const { restaurants, isLoading } = useSelector((state) => state.restaurants);
  const classes = useStyles();

  
// Everything commented out below is somewhat working code to automatically display
//    restaurants.  It is just not connected to the backend?
  return (
    <Grid container alignItems="stretch" spacing={3}>
        <Card className={classes.grid} raised elevation={6}>
          {/* The CardActionArea will make the whole card interactable */}
          {/* <CardActionArea> */}
          <CardMedia 
            className={classes.media} 
            image={'https://th.bing.com/th/id/OIP.zL5emBvbPANI7h2nZkbOSAHaEc?pid=ImgDet&rs=1'} 
            height="140"
            alt="Front of Champy's restaurant"
          />
          <CardContent>
            <Typography variant="h5" component="div" className={classes.temp_rest}>
              Champy's
            </Typography>
            <Typography variant="body2" color="text.secondary">
              I do not know what I should put in this box :)
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
          {/* </CardActionArea> */}
        </Card>
        <Card className={classes.grid} raised elevation={6}>
          <CardMedia 
              className={classes.media} 
              image={'https://th.bing.com/th/id/OIP.bDH7LF0amo4HB_bz8MW4CQHaE8?pid=ImgDet&rs=1'} 
              height="140"
              alt="Front of Champy's restaurant"
            />
            <CardContent>
            <Typography variant="h5" component="div" className={classes.temp_rest}>
              Subway
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Why do they make pizzas but not Burritos?
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
          
        </Card>
        <Card className={classes.grid} raised elevation={6}>
          <CardMedia 
              className={classes.media} 
              image={'https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_50,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/chattanooga/Ice-Cream-Show-3--8e2840785056b36_8e2843cb-5056-b365-aba229b80a24daef.jpg'} 
              height="140"
              alt="Front of Champy's restaurant"
            />
            <CardContent>
            <Typography variant="h5" component="div" className={classes.temp_rest}>
              Ice Cream Show
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Best Ice cream place in Chattanooga and I haven't had sugar in the past like 4 weeks
              So I am mad craving ice cream :)
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
          
        </Card>
    </Grid>

    
    // <p className={classes.temp_rest}>Subway</p>,
    // <p className={classes.temp_rest}>Chick-fil-a</p>,
    // <p className={classes.temp_rest}>Moe's</p>
    // isLoading ? <CircularProgress /> : (
    //   <Grid container alignItems="stretch" spacing={3}>
    //     {restaurants?.map((restaurant) => (
    //       <Grid key={restaurant._id} item xs={12} sm={12} md={6} lg={3}>
    //         <Restaurant restaurant={restaurant} setCurrentId={setCurrentId} />
    //         <Typography variant="body2">{console.log(restaurant.name)}</Typography>
    //       </Grid>
    //     ))}
    //   </Grid>
    // )
  );
};



// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }
// const Restaurants = ({ restaurant }) => {
//   // const dispatch = useDispatch();
//   const history = useHistory();
//   const classes = useStyles();
//   const [name, data] = useState();

//   // useEffect(() => {
//   //   fetch('name').then(response => {
//   //     setData(response.json())
//   //   })
//   // }, [])



//   return (

//     <Card>
//         {/* //testing
//         // console.log(restaurant.name), */}

//         <div className={classes.overlay}>
//           <Typography variant="h6">{restaurant.name}</Typography>
//           <Typography variant="body2">{console.log(restaurant.name)}</Typography>
//         </div>
//         {/* // <Restaurants>
//         //   <h3>"wow"</h3>
//         // </Restaurants> */}
//     </Card>
      
// );
  
// };

export default Restaurants;
