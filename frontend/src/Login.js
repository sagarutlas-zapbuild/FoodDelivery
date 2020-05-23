/*global FB*/


import React from 'react'
import { Redirect } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Component } from 'react';
import { loginUrl } from './Urls';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        window.fbAsyncInit = function () {
            FB.init({
                appId: '262698028436859',
                cookie: true,
                xfbml: true,
                version: 'v7.0'
            });

            FB.AppEvents.logPageView();

        };

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleLogin = (event, data) => {
        event.preventDefault();
        fetch(loginUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(res => res.json())
          .then(json => {
            localStorage.setItem('token', json.token);
            localStorage.setItem('user_email', json.user.email);
            localStorage.setItem('user_name', json.user.name);
          }).catch((err) => {
            console.log(err);
          });}
    render() {
        if (localStorage.getItem('token') ? true : false) {
            return (<Redirect to='/home' />);
        }
        else {
            return (<div >
                <Form className="APP" name="loginform" onSubmit={(event) => { this.handleLogin(event, this.state); }}>
                    <Form.Row>

                        <Form.Label>Email</Form.Label>

                        <Form.Control type="email" name="email" onChange={(event) => { this.handleChange(event); }}></Form.Control>

                    </Form.Row>
                    <Form.Row>

                        <Form.Label>Password</Form.Label>


                        <Form.Control type="password" name="password" onChange={(event) => { this.handleChange(event); }}></Form.Control>

                    </Form.Row>
                    <Form.Row>
                        <Button type="submit" variant="primary">Login</Button>
                        <div class="fb-login-button"
                        data-size="large"
                        data-button-type="continue_with"
                        data-layout="rounded"
                        data-auto-logout-link="true"
                        data-use-continue-as="true"
                        data-width=""></div>
                    </Form.Row>
                    

                </Form>
            </div>);
        }
    }
}

export default Login