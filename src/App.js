import React from 'react';
import './App.css';
import MyCard from './components/MyCard/MyCard';
function App() {
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
        <MyCard></MyCard>
        <MyCard></MyCard>
        <MyCard></MyCard>
        <MyCard></MyCard>
        <MyCard></MyCard>
        <MyCard></MyCard>
      </div>
      <div className="my-foot">foot</div>
    </div>
  );
}

export default App;
