import React from 'react';
// import styles from './index.scss';

import ContactPost from '../../api/contact/post';

import Button from '../../components/button';
import Form from '../../components/form';
import Input from '../../components/input';
import NavBar from '../../components/navbar';
import Textarea from '../../components/textarea';

import bgImg from 'startbootstrap-clean-blog/img/home-bg.jpg';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    console.log('Home extends React.Component: ', props);
  }
  render() {
    return (
      <div>
      <NavBar />

      <header className="masthead" style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="site-heading">
                <h1>Clean Blog</h1>
                <span className="subheading">A Blog Theme by Start Bootstrap</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="login container">
        <div className="row">
=        <h1>React Form Valdation Example</h1>
        <Form method={ ContactPost }>
          <Input title={'First Name'} name={'firstName'} validator={'required'} />
          <Input title={'Last Name'} name={'lastName'} validator={'required'}/>
          <Input title={'Email'} name={'email'} type={'email'} validator={'required, email'} />
          <Input title={'Address'} name={'address'} validator={'required'} />
          <Input title={'Address 2'} name={'address2'} />
          <Textarea rows={'10'} title={'Message'} name={'message'} validator={'required'} />
          <Button value={'Send!'} class={'btn-submit'} type={'submit'} />
        </Form>
      </div>
      </div>
      </div>
    );
  }
}
