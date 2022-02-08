import React, { lazy, Suspense } from "react";
import { Container } from '@material-ui/core';
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom"
import './App.css';
import Auth from "./components/Auth/auth";
import Navbar from "./components/Navbar/navbar";
//import MapContainer from "./components/MapContainer/mapContainer";
import useStyles from './styles';

//Doing this will make load times faster. Look up Code Splitting to learn more
const PostDetails = lazy(() => import('./components/PostDetails/PostDetails'));
const Home = lazy(() => import('./components/Home/home'));
const CreatorOrTag = lazy(() => import("./components/CreatorOrTag/CreatorOrTag"));
const MapContainer = lazy(() => import("./components/MapContainer/mapContainer"));


const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const styles = useStyles();


  return (
    <BrowserRouter>
      <Container className={styles.background} maxWidth="lg">
        <Navbar />
          <Suspense fallback={<div style={{color: 'white'}}>Loading...</div>}>
            <Switch>
              <Route path="/" exact component={() => (user?.result == null || user?.result == undefined ? <Auth/> : <Redirect to="/posts" />)}/>
              <Route path="/posts" exact component={Home} />
              <Route path="/posts/search" exact component={Home} />
              <Route path="/posts/:id" exact component={PostDetails} />
              <Route path="/mapContainer" exact component={MapContainer} />
              <Route path={['/creator/:name', '/tags/:name']} component={CreatorOrTag} />
              <Route path="/auth" exact component={() => (user?.result == null || user?.result == undefined ? <Auth /> : <Redirect to="/posts" />)} />
            </Switch>
          </Suspense>
      </Container>
    </BrowserRouter>
  );
}
// Testing

export default App;
