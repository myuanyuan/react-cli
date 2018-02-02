import React, { Component } from 'react';
import { Layout } from 'antd';
import { Nav } from '../../components';
import Routes from '../../routes';
import './App.css';
const { Content } = Layout;

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
