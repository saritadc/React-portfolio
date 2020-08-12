import React, { Component } from 'react';
import { Profile_image } from '../images';



class Home extends React.Component {

  render() {
    return (
      <div className="content">
        <img src={ Profile_image } className="profile_pic" />
        <h1>Sarita DC</h1>
        <h3>Positive thinker </h3>
        <p>Love coding,travelling. </p>
        <p><i>"I have no special talent. I am  only passionately curious"</i></p>
        <a href="https://www.facebook.com/Sarita DC" target="_blank"><i className="fa fa-facebook-square" aria-hidden="true" /></a>
        <a href="https://www.instagram.com/saritta1111" target="_blank"><i className="fa fa-instagram" aria-hidden="true"  /></a>
        <a href="https:www.twitter.com/daydreamer" target="_blank"><i className="fa fa-twitter-square" aria-hidden="true"  /></a>
      </div>
    );
  }

}

export default Home
