import React, { Component } from 'react';
import { Menu, Layout } from 'antd';
import { Router, Route, Link } from 'react-router-dom';
import './Nav.css';
const { Header } = Layout;
const SubMenu = Menu.SubMenu;

export class Nav extends Component {
  constructor(props) {
    super(props);
    // this.renderNav=this.renderNav.bind(this);
    this.menus=[
      {name: "首页", path: '/home', classname: '/home'},
      {name: "登录", path: '/login', classname: '/login'},
      {name: "页内导航", path: '/home/nav', classname: '/home/nav'},
      {name: "页内登录", path: '/home/login', classname: '/home/login'}
    ];
  }
  renderNav = () => {
    const navlists = this.menus || [];
    const menuItems = navlists.map((menu, index) => {
      if (menu.sonList) {
        return (
          <SubMenu className={menu.className} key={menu.path} title={menu.name}>
            {menu.sonList.map((item, key) => (
              <Menu.Item key={item.path}>
                <Link to={item.path}>
                  {item.name}
                </Link>
              </Menu.Item>
            ))}
          </SubMenu>
        );
      }
      return (
        <Menu.Item key={menu.path}>
          <Link to={menu.path}>
            {menu.name}
          </Link>
        </Menu.Item>
      );
    });
    return menuItems;
  };
  render(){
    const currentPath = 1;
      // const currentPath = history.getCurrentLocation().pathname;
      return(
        <Header style={{ position: 'fixed', width: '100%' }}>
        <div className="logo" />
          <Menu
            id="main-header-nav-list"
            mode="horizontal"
            selectedKeys={[]}
            style={{ lineHeight: '64px', height: '64px' }}
            onSelect = {this.onMenuSelect}
          >
            {this.renderNav()}
          </Menu>
        </Header>
      )
  }
}
