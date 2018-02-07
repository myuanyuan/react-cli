import React, { Component } from 'react';
import Slider from 'react-slick';
import BScroll from 'better-scroll'
import './Home.css';

export class Home extends Component {
  constructor(props) {
     super(props);
   }
  componentDidMount(){
    // 初始化 better-scroll
    let scroll = new BScroll('.wrapper')
  }
  render() {
    const arr=[];
    arr.length=20;
    arr.fill('2');
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
          <div><img src={require("./img/banner1.png")} alt=""/></div>
          <div><img src={require("./img/banner.png")} alt=""/></div>
          <div><img src={require("./img/banner1.png")} alt=""/></div>
          <div><img src={require("./img/banner.png")} alt=""/></div>
          <div><img src={require("./img/banner1.png")} alt=""/></div>
        </Slider>
          <div className="manu-con">
            <ul className='manu'>
              <li><span>1</span></li>
              <li><span>2</span></li>
              <li><span>3</span></li>
              <li><span>4</span></li>
              <li><span>5</span></li>
            </ul>
          </div>
          <div className="wrapper">
            <ul className='main-list'>
              { arr.map((item,index)=>{
                return <li key={index}>
                <div className="tit">{index}</div>
                <div className="discript"></div>
              </li>
              }) }
            </ul>
          </div>
      </div>
    );
  }
}
