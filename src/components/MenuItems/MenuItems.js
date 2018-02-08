/*
  manus: array 格式 [{value:'',id:''}]
  itemStyle: item 样式
  style: 父盒子样式
*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MenuItems.css';


export class MenuItems extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className='MenuItems manu' style={this.props.style}>
          { this.props.manus && this.props.manus.map((item)=>{
              return <li key={item.id} style={this.props.itemStyle}>
                  <Link to='/login.html'><span></span></Link>
                  <i>{item.value}</i>
                </li>;
          } )}
      </ul>
    )
  }
}
