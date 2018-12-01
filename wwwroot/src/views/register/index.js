import React from 'react';
import './index.scss';

import RegisterPost from '../../api/user/register';

import Button from '../../components/button';
import Form from '../../components/form';
import Input from '../../components/input';
import NavBar from '../../components/navbar';

export default class Register extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <NavBar />
                <div className="login container">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-6">
                            <h1>Register</h1>
                            <Form method={ RegisterPost }>
                                <Input title={'Username'} name={'Username'} validator={'required'} />
                                <Input title={'Password'} name={'Password'} validator={'required'} />
                                <Input title={'First Name'} name={'Firstname'} validator={'required'} />
                                <Input title={'Last Name'} name={'Lastname'} validator={'required'} />
                                <Input title={'Email'} name={'Email'} validator={'required, email'} />
                                <Button value={'Send!'} class={'btn-submit'} type={'Register'} />
                            </Form>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
            </div>
        );
    }
}