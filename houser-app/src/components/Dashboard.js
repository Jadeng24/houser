import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
export default class Dashboard extends Component {

    render() {
        return (
            <div className="Dashboard">
            <Nav/>
            <div className="contentHolder">    
            <div className="content">
               
                       <br/> 
            
                       <Link to="/step1"><button className="addPropBtn"> Add new property</button></Link>
                    </div>
                </div>    
            </div>    
        )
    }
}