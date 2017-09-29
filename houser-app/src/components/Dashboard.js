import React, { Component } from 'react';
import smHouse from './smHouse.png';
import { Link } from 'react-router-dom';

export default class Dashboard extends Component {

    render() {
        return (
            <div className="Dashboard">
            <div className="houserNav">
                <img src={smHouse} alt="homeLogo" className="homeLogo" />
                <h2>Houser Dashboard</h2>
            </div>
            <div className="content">
               
                       <br/> 
            
                       <Link to="/step1"><button className="addPropBtn"> Add new property</button></Link>
                </div>
            </div>    
        )
    }
}