import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

export default class Wizard2 extends Component {

    render() {
        return (
            <div className="Dashboard">
                <Nav />
                <div className="contentHolder">
                <div className="content">
                    step 2
                    <br />
                    <Link to="/step1"><button className="addPropBtn"> Previous </button></Link>
                    <Link to="/step3"><button className="addPropBtn"> Next </button></Link>
                    </div>
                </div>    
            </div>
        )
    }
}