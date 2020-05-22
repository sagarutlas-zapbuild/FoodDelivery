import React, { Component } from 'react'
import './Login.css';
import { Row, Col, Label } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';
import {loginUrl} from './Urls';

export default class Login extends Component {
    constructor(state) {
        super(state)
        this.state = {
            phone: '',
            password: '',
            error_phone: '',
            error_password: '',
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    validateForm() {
        let error_phone = "";
        let error_password = "";

        if (!this.state.phone) {
            error_phone = "*Please enter your mobile no.";
        }

        if (!this.state.password) {
            error_password = "*Please enter your password.";
        }
        if (error_phone || error_password) {
            this.setState({ error_phone, error_password });
            return false;
        }
        return true;
    }
    submitHandler = e => {
        const isValid = this.validateForm();
        if (isValid) {
            e.preventDefault();
            const uploadData = new FormData();
            uploadData.append('phone', this.state.phone);
            uploadData.append('password', this.state.password);
            console.log(uploadData);
            fetch(loginUrl, {
                method: 'POST',
                body: uploadData
            })
                .then(res => console.log(res))
                .catch(error => console.log(error))
            // window.location.reload(false);
        }
    }

    render() {
        return (
            <div className="mainborder">
                <div className="login">Login</div><br />
                <Row className="phone">
                    <Col sm={{ size: 'auto', offset: 1 }}>
                        <Label for="phone" >Phone</Label>
                    </Col>
                    <Col sm={{ size: 'auto', offset: 0 }}>
                        <input type="text" name="phone" value={this.state.phone} id="phone"
                            placeholder="Enter phone no." className="phones"
                            onChange={this.changeHandler}></input>
                    </Col>
                </Row>
                <div style={{ color: "red", fontSize: "14px" }}
                    className="errorMsgphone">{this.state.error_phone}</div><br />
                <Row className="phone">
                    <Col sm={{ size: 'auto', offset: 1 }}>
                        <Label for="password" >Password</Label>
                    </Col>
                    <Col sm={{ size: 'auto', offset: -3 }}>
                        <input type="password" name="password" value={this.state.password} id="password"
                            placeholder="Enter password" onChange={this.changeHandler}></input>
                    </Col>
                </Row>
                <div style={{ color: "red", fontSize: "14px" }}
                    className="errorMsgphone">{this.state.error_password}</div><br />
                <Row>
                    <Col className="loginbutton">
                        <button type="submit" value="submit" className="logins"
                            onClick={this.submitHandler}>Login</button>
                    </Col>
                </Row><br />
                <Row className="signups">
                    <h3>Don't have an account</h3>
                    <div>
                        <Nav tabs>
                            <NavItem>
                                <NavLink href="/Signup" className="signupbutton">Signup</NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                </Row><br />
                <Row className="loginwithfb">
                    <button type="submit" className="btn btn-primary"> Login with facebook</button>
                </Row>
            </div>
        )
    }
}
