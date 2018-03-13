import React, { Component } from 'react';
import { Menu, Layout } from 'antd';
import { Link } from 'react-router-dom';
import './Nav.css';

const { Header } = Layout;
const SubMenu = Menu.SubMenu;

export class Nav extends Component {
  constructor(props) {
    super(props);
    this.renderNav=this.renderNav.bind(this);
    this.menus=[
      {name: "首页", path: '/home', classname: '/home',
      // sonList:[
      //   {name: "登陆", path: '/login.html', classname: '/login.html'},
      // ],
    },
      {name: "导航", path: '/home/nav', classname: '/home/nav'},
      {name: "登陆", path: '/home/login', classname: '/home/login'}
    ];
  }
  renderNav() {
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
      const currentPath = window.location.pathname;
      return(
        <Header className='app-header'>
        <div className="logo" />
          <Menu
            id="main-header-nav-list"
            mode="horizontal"
            selectedKeys={[currentPath]}
            style={{ height: '100%', width:'100%' }}
            onSelect = {this.onMenuSelect}
          >
            {this.renderNav()}
          </Menu>
          <Link className='login-out' to='/login.html'>退出</Link>
        </Header>
      )
  }
}
