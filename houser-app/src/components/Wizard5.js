import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

export default class Wizard3 extends Component {

    render() {
        return (
            <div className="Dashboard">
                <Nav />
                <div className="contentHolder">
                <div className="content">
                    step 5
                    <br />
                    <Link to="/step4"><button className="addPropBtn"> Previous </button></Link>
                    <Link to="/complete"><button className="addPropBtn"> Complete </button></Link>
                    </div>
                </div>    
            </div>
        )
    }
}