import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import createHistory from 'history/createBrowserHistory'
import './Login.css';

const FormItem = Form.Item;
const history = createHistory()

@Form.create()

export class Login extends React.Component {
   constructor(props) {
     super(props);
     this.handleSubmit=this.handleSubmit.bind(this);
   }
  
  handleSubmit (e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.history.push('/home');
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className='login'>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '请输入用户名!' }],
            })(
              <Input size='large' prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码!' }],
            })(
              <Input size='large' prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>记住密码</Checkbox>
            )}
            <a className="login-form-forgot" href="">忘记密码</a>
            <Button size='large' type="primary" htmlType="submit" className="login-form-button">
             登陆
            </Button>
          </FormItem>
        </Form>
      </div>
      
    );
  }
}
