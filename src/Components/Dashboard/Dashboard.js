import React, { Component } from './node_modules/react';
import './Components/House/House';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
               <House /> 
            </div>
        )
    }
}

export default Dashboard;
