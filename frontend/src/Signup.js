import React, { Component } from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';
import { signupUrl } from './Urls';
import './Signup.css';
export default class Signup extends Component {
    constructor(state) {
        super(state)
        this.state = {
            name: '',
            phone: '',
            email: '',
            password: '',
            confirm_password: '',
            error_name: '',
            error_phone: '',
            error_email: '',
            error_password: '',
            error_confirm_password: '',
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    validateform() {
        let error_name = "";
        let error_phone = "";
        let error_password = "";
        let error_confirm_password = "";
        let error_email = "";

        if (!this.state.name) {
            error_name = "*Required";
        }
        if (!this.state.phone) {
            error_phone = "*Required";
        }
        if (!this.state.password) {
            error_password = "*Required";
        }
        if (!this.state.confirm_password) {
            error_confirm_password = "*Required";
        }
        if (this.state.password !== this.state.confirm_password) {
            error_confirm_password = "*Please type same password";
        }

        if (typeof this.state.email !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(this.state.email)) {
                error_email = "*Valid email-ID.Required";
            }
        }

        if (error_name || error_phone || error_password
            || error_confirm_password || error_email) {
            this.setState({
                error_name, error_phone, error_password,
                error_confirm_password, error_email
            });
            return false;
        }
        return true;
    }
    submitHandler = e => {
        e.preventDefault();
        const isValid = this.validateform();
        if (isValid) {
            const uploaddata = new FormData();
            uploaddata.append('name', this.state.name);
            uploaddata.append('username', this.state.phone);
            uploaddata.append('password', this.state.password);
            uploaddata.append('email', this.state.email);
            console.log(uploaddata);
            fetch(signupUrl, {
                method: 'POST',
                body: uploaddata
            })
                .then(res => console.log(res))
                .catch(error => console.log(error))
            window.location.reload(false);
        }
    }
    render() {
        return (
            <div  style={{marginLeft: "40%"}}>
                <form encType="multipart/form-data" onSubmit={this.submitHandler}>
                    <h1>Signup</h1>
                    <div style={{ color: "green", fontWeight: "bold" }}>Name*</div>
                    <input type="text" name="name" value={this.name} onChange={this.changeHandler} placeholder="Name" />
                    <div style={{ color: "red", fontSize: "14px" }} >{this.state.error_name}</div><br />
                    <div style={{ color: "green", fontWeight: "bold" }}>Mobile No.*</div>
                    <input type="text" name="phone" value={this.phone} onChange={this.changeHandler} placeholder="Mobile No." />
                    <div style={{ color: "red", fontSize: "14px" }} >{this.state.error_phone}</div><br />
                    <div style={{ color: "green", fontWeight: "bold" }}>Email*</div>
                    <input type="text" name="email" value={this.email} onChange={this.changeHandler} placeholder="Email" />
                    <div style={{ color: "red", fontSize: "14px" }} >{this.state.error_email}</div><br />
                    <div style={{ color: "green", fontWeight: "bold" }}>Password*</div>
                    <input type="password" name="password" value={this.password} onChange={this.changeHandler} placeholder="Password" />
                    <div style={{ color: "red", fontSize: "14px" }} >{this.state.error_password}</div><br />
                    <div style={{ color: "green", fontWeight: "bold" }}>Confirm Password*</div>
                    <input type="password" name="confirm_password" value={this.confirm_password} onChange={this.changeHandler} placeholder="Confirm password" />
                    <div style={{ color: "red", fontSize: "14px" }} >{this.state.error_confirm_password}</div><br />
                    <button type="submit" style={{ fontWeight: "bold", backgroundColor: "#37BC9B" }}>Signup</button>
                </form>
                <Nav>
                    <NavItem>
                        <p>Already have an account</p>
                        <NavLink href="/Login" className="signup" style={{ fontWeight: "bold" }}>Login</NavLink>
                    </NavItem>
                </Nav>
            </div>
        )
    }
}
