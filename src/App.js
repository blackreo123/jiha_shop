import React from 'react';
import './App.css';
import MyCard from './components/MyCard/MyCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import shoe1 from './images/shoe1.jpeg';
import shoe2 from './images/shoe2.jpeg';
import shoe3 from './images/shoe3.jpg';
import shoe4 from './images/shoe4.webp';
import shoe5 from './images/shoe5.jpg';
import shoe6 from './images/shoe6.webp';
function App() {

  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="grid-container">
      <div className="my-top">
        <div className="logo">jiha shop</div>
        <div className="loginandcart">
          <div className="login">login</div>
          <div className="cart">cart</div>
        </div>    
      </div>
      <div className="my-side">side</div>
      <div className="my-contents">
      <div className="my-slider">
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <img src={shoe1} />
          </div>
          <div>
          <img src={shoe2} />
          </div>
          <div>
          <img src={shoe3} />
          </div>
          <div>
          <img src={shoe4} />
          </div>
          <div>
          <img src={shoe5} />
          </div>
          <div>
          <img src={shoe6} />
          </div>
        </Slider>
      </div>
      </div>
      <div className="my-foot">foot</div>
    </div>
  );
}

export default App;
