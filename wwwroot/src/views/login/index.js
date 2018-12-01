import React from 'react';
import './index.scss';

import Authenticate from '../../api/user/authenticate';

import Button from '../../components/button';
import Form from '../../components/form';
import Input from '../../components/input';
import NavBar from '../../components/navbar';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    console.log('Home extends React.Component: ', props);
  }
  render() {
    return (
      <div>
      <NavBar />
       <div className="login container">
          <div className="row">
            <div className="col"></div>
            <div className="col-6">
              <h1>Login</h1>
              <Form method={ Authenticate }>
                <Input title={'Username'} name={'Username'} validator={'required'} />
                <Input title={'Password'} name={'Password'} type="password" validator={'required'} />
                <Button value={'Send!'} class={'btn-submit'} type={'submit'} />
              </Form>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    );
  }
}