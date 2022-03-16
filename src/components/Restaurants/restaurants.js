import { getRestaurant } from '../../actions/restaurants';

import React from 'react';
import { Grid, CircularProgress, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

import useStyles from './styles';
import restaurants from '../../reducers/restaurants';
import { fetchRestaurant } from '../../api/index.js';
import Restaurant from './Restraunt/restaurant';

const Restaurants = ({ setCurrentId }) => {
  const { restaurants, isLoading } = useSelector((state) => state.restaurants);
  const classes = useStyles();

  // if (!restaurants.length && !isLoading) return 'No restaurants';

  return (
    isLoading ? <CircularProgress /> : (
      <Grid container alignItems="stretch" spacing={3}>
        {restaurants?.map((restaurant) => (
          <Grid key={restaurant._id} item xs={12} sm={12} md={6} lg={3}>
            <Restaurant restaurant={restaurant} setCurrentId={setCurrentId} />
            <Typography variant="body2">{console.log(restaurant.name)}</Typography>
          </Grid>
        ))}
      </Grid>
    )
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
