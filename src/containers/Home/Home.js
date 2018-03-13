import React, { Component } from 'react'
import Slider from 'react-slick'
import BScroll from 'better-scroll'
import { MenuItems } from '../../components'
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
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const manus = [
      {id:'/login.html', value:'item1'},
      {id:2, value:'item2'},
      {id:3, value:'item3'},
      {id:4, value:'item4'},
      {id:5, value:'item5'},
      {id:6, value:'item6'}
    ];
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
            <MenuItems
              style={{height: '100%'}}
              manus={manus}
             />
          </div>
          <div className="wrapper">
            <ul className='main-list'>
              { arr.map((item,index)=>{
                return <li key={index}>
                <div className="tit"></div>
                <div className="discript"></div>
              </li>
              }) }
            </ul>
          </div>
      </div>
    );
  }
}
