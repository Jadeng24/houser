import React, { Component } from 'react';
import houserIMG from './house.png';
import { Link } from 'react-router-dom';
export default class Login extends Component {

    render() {
        return (
            <div className="content">
            <div className="Login">
                <img className="houserLogo" src={houserIMG} alt="house" />
                <h2>Username</h2>
                <input />
                <h2>Password</h2>
                <input />
                <br />
                    
                <Link to="/dashboard"><button className="loginBtn"> Login </button></Link>

                <button className="registerBtn"> Register </button>
                </div>
            </div>    
        )
    }
}