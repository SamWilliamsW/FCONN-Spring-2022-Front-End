import React, { useEffect } from 'react';
import { Box, Grid, Paper, Typography, CircularProgress, Divider } from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useHistory, Link } from 'react-router-dom';

import { getRestaurant, getRestaurants } from '../../actions/restaurants';
import useStyles from './styles';


const RestaurantPage = () => {
    const { restaurants, isLoading } = useSelector((state) => state.restaurants);
    const dispatch = useDispatch();
    const history = useHistory();
    const styles = useStyles();
    const { id } = useParams();
    useEffect(() => {
        dispatch(getRestaurants());
    }, []);

    // Find the restaurant with the id from the restaurants array
    // This should be changed to use the getRestaurant action at some point
    const restaurant = restaurants.find((restaurant) => restaurant._id === id);


    if (isLoading) {
        return (
            <Paper elevation={6} className={styles.loadingPaper}>
                <CircularProgress size="7em" />
            </Paper>
        );
    } else {

        return (
            <div className={styles.container}>

                    <Typography variant="h4" className={styles.center}>{restaurant.name}</Typography>
                    <Divider style={{ width: '100%', margin: '20px 0' }} />

                <div className={styles.subtitles}>
                    <div>{restaurant.dinein ? <Typography variant="subtitle2">Dine In</Typography> : null}</div>
                    <div>{restaurant.takeout ? <Typography variant="subtitle2">Take Out</Typography> : null}</div>
                    <div>{restaurant.delivery ? <Typography variant="subtitle2">Delivery</Typography> : null}</div>
                </div>

                <div className={styles.section}>
                <div>Tags: </div>
                {restaurant.tags.map((tag) => ( 
                        <Typography variant="subtitle5">{tag} </Typography>
                ))}
                </div>

                {/* Left side of profile */}

                <div className={styles.right}>

                    <div className={styles.left}>
                        <div className={styles.imageSection}>
                            {restaurant.selectedFile ? 
                            <img className={styles.pic} src={restaurant.selectedFile}  alt={restaurant.title}/> : 
                            <img className={styles.nopic} src={'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}
                                alt={restaurant.title} />}
                        </div>
                    </div>

                {/* Right side of profile */}

                    <div className={styles.section}>
                        <Typography gutterBottom variant="h5">Restaurant Hours</Typography>
                        <Typography gutterBottom variant="subtitle2"> Sunday: {restaurant.businessHoursStart[0]} - {restaurant.businessHoursEnd[0]}  </Typography>
                        <Typography gutterBottom variant="subtitle2"> Monday: {restaurant.businessHoursStart[1]} - {restaurant.businessHoursEnd[1]}  </Typography>
                        <Typography gutterBottom variant="subtitle2"> Tuesday: {restaurant.businessHoursStart[2]} - {restaurant.businessHoursEnd[2]}  </Typography>
                        <Typography gutterBottom variant="subtitle2"> Wednesday: {restaurant.businessHoursStart[3]} - {restaurant.businessHoursEnd[3]}  </Typography>
                        <Typography gutterBottom variant="subtitle2"> Thursday: {restaurant.businessHoursStart[4]} - {restaurant.businessHoursEnd[4]}  </Typography>
                        <Typography gutterBottom variant="subtitle2"> Friday: {restaurant.businessHoursStart[5]} - {restaurant.businessHoursEnd[5]}  </Typography>
                        <Typography gutterBottom variant="subtitle2"> Saturday: {restaurant.businessHoursStart[6]} - {restaurant.businessHoursEnd[6]}  </Typography>
                    </div>                   
                    
                    <div className={styles.section}>
                        <Typography gutterBottom variant="h5">Contact Info</Typography>
                        <Typography gutterBottom variant="subtitle2">{restaurant.address}</Typography>
                        <Typography gutterBottom variant="subtitle2">{restaurant.city}, {restaurant.state} {restaurant.zip}</Typography>
                        <Typography gutterBottom variant="subtitle2">{restaurant.phone}</Typography>
                    </div>
                    
                </div>

                <div className={styles.center}>
                    <Link to={restaurant.menuLink}>
                        <Typography variant="h5" gutterBottom>See our menu</Typography>
                    </Link>
                </div>
                </div>
            
        );
    };
};

export default RestaurantPage;

//         return (
//             <Grid container spacing={2} className={styles.container}>
//                 {/* <div className={styles.container}> */}
//                 <Typography variant="h4" gutterBottom>{restaurant.name}</Typography>
//                 <Divider style={{ width: '100%', margin: '20px 0' }} />

//             {/* Left side of profile */}
//                 <Grid ListItem sm={4}>

//                 <img alt="complex" src="https://th.bing.com/th/id/R.329998063ad3af37a372c96ac6559c4f?rik=YCMANs%2b7vcA3Mw&pid=ImgRaw&r=0" />
//                 <Typography gutterBottom variant="h5">Restaurant Hours</Typography>
//                 <Typography gutterBottom variant="subtitle2">"Hours go here"</Typography>

                    
//                 </Grid>

//             {/* Right side of profile */}
//                 <Grid  ListItem md={6} className={styles.right}>

//                 <Typography gutterBottom variant="h5">Restaurant Address</Typography>


//                 </Grid>
//                 <Grid ListItem xs={6} md={8}>
//                     <ListItem>xs=6 md=8</ListItem>
//                 </Grid>
//                 <Grid ListItem xs={8} md={4}>
//                     <ListItem>xs=6 md=4</ListItem>
//                 </Grid>
//                 <Grid ListItem xs={6} md={4}>
//                     <ListItem>xs=6 md=4</ListItem>
//                 </Grid>
//                 <Grid ListItem xs={6} md={8}>
//                     <ListItem>xs=6 md=8</ListItem>
//                 </Grid>
                    

//                 <div className={styles.center}>
//                 <Typography variant="subtitle2" gutterBottom>{"Put food info here. "}</Typography>
//                 </div>
                 
//                 <div className={styles.card}>
//                     <div className={styles.section}>
//                     </div>

//                 </div>
//                 {/* </div> */}
//             </Grid>
//         );
//     };
// };

// export default RestaurantPage;

