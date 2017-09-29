import React, { Component } from 'react';
import smHouse from './smHouse.png';
import { Link } from 'react-router-dom';

export default class Nav extends Component {

    render() {
        return (
            <div className="houserNav">
                <Link to={"/"}><img src={smHouse} alt="homeLogo" className="homeLogo" /></Link>
                <h2>Houser Dashboard</h2>
            </div>
        )
    }
}