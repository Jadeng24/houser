import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

export default class Wizard1 extends Component {

    render() {
        return (
            <div className="Dashboard">
                <Nav/>
                <div className="contentHolder">
                <div className="content">
                    step 1

                    <br />
                    <Link to="/dashboard"><button className="addPropBtn"> Previous </button></Link>
                    <Link to="/step2"><button className="addPropBtn"> Next </button></Link>
                    </div>
                </div>    
            </div>
        )
    }
}