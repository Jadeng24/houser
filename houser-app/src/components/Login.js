import React, { Component } from 'react';
import houserIMG from './house.png';
import { Link } from 'react-router-dom';
export default class Login extends Component {

    render() {
        return (
            <div className="contentHolder">
            <div className="content loginContent">
            <div className="Login">
                <img className="houserLogo" src={houserIMG} alt="house" />
                <h2>Username</h2>
                <input />
                <h2>Password</h2>
                <input />
                <br />
                    {/* postgres://xosnchrtlhwtjl:354bbb3654c0fec98f206c782b3b8a221dfa73bcc1cc34907a64c500fc60b657@ec2-184-73-189-221.compute-1.amazonaws.com:5432/da9kctg0fhrpak?ssl=true */}
                <Link to="/dashboard"><button className="loginBtn"> Login </button></Link>

                <Link to="/dashboard"><button className="registerBtn"> Register </button></Link>
                    </div>
                </div>    
            </div>    
        )
    }
}