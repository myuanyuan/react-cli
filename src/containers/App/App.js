import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Layout } from 'antd';
import {BaseTitle, Nav, Login } from '../../components';
import Routes from '../../routes';
import './App.css';
const { Header, Content } = Layout;

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
        <Nav />
        <Content>
          {Routes(this.props)}
        </Content>
        </Layout>
      </div>
    );
  }
}
