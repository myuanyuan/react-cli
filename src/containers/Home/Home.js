import React, { Component } from 'react';
import Slider from 'react-slick';
import './Home.css';

export class Home extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="Home">
        <Slider {...settings}>
            <div><img src={require("./img/banner.png")} alt=""/></div>
            <div><img src={require("./img/banner.png")} alt=""/></div>
            <div><img src={require("./img/banner.png")} alt=""/></div>
            <div><img src={require("./img/banner.png")} alt=""/></div>
            <div><img src={require("./img/banner.png")} alt=""/></div>
            <div><img src={require("./img/banner.png")} alt=""/></div>
          </Slider>
          <ul className='manu'>
            <li><span>1</span></li>
            <li><span>2</span></li>
            <li><span>3</span></li>
            <li><span>4</span></li>
            <li><span>5</span></li>
          </ul>
          <ul className='main-list'>
            <li>
              <div className="tit">1</div>
              <div className="discript"></div>
            </li>
            <li>
              <div className="tit">2</div>
              <div className="discript"></div>
            </li>
            <li>
              <div className="tit">3</div>
              <div className="discript"></div>
            </li>
            <li>
              <div className="tit">4</div>
              <div className="discript"></div>
            </li>
            <li>
              <div className="tit">5</div>
              <div className="discript"></div>
            </li>
            <li>
              <div className="tit">6</div>
              <div className="discript"></div>
            </li>
            <li>
              <div className="tit">7</div>
              <div className="discript"></div>
            </li>
          </ul>
      </div>
    );
  }
}
