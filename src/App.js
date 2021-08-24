import React from 'react';
import './App.css';
import MyCard from './components/MyCard/MyCard';
import Login from './components/Login/Login';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, Route, Switch } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
function App() {

  
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay : true,
    autoplaySpeed : 3000,
    arrows : false
  };
  return (
            <Switch>
                <Route path = "/" component={MainPage} exact></Route>
                <Route path = "/login" component={Login} exact></Route>
            </Switch>
  );
}

export default App;
