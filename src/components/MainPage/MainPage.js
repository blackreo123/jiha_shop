import React from 'react';
// import './App.css';
import MyCard from '../MyCard/MyCard';
import Login from '../Login/Login';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import shoe1 from '../../images/shoe1.jpeg';
import shoe2 from '../../images/shoe2.jpeg';
import shoe3 from '../../images/shoe3.jpg';
import shoe4 from '../../images/shoe4.webp';
import shoe5 from '../../images/shoe5.jpg';
import shoe6 from '../../images/shoe6.webp';
function MainPage() {
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
        <div className="grid-container">
        <div className="my-top">
            <div className="logo">jiha shop</div>
            <div className="loginandcart">
            <Link to='/login'>login</Link>          
            </div>    
        </div>
        <div className="my-side">side</div>
        <div className="my-contents">
        <div className="my-slider">
            <Slider {...settings}>
            <div>
                <img alt={"fdsa"} src={shoe1} />
            </div>
            <div>
            <img alt={"fdsa"} src={shoe2} />
            </div>
            <div>
            <img alt={"fdsa"} src={shoe3} />
            </div>
            <div>
            <img alt={"fdsa"} src={shoe4} />
            </div>
            <div>
            <img alt={"fdsa"} src={shoe5} />
            </div>
            <div>
            <img alt={"fdsa"} src={shoe6} />
            </div>
            </Slider>
        </div>
        </div>
        <div className="my-foot">foot</div>
        </div>
    );
 }

export default MainPage;
