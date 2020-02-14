import React, { Component } from 'react';
import House from './House/House.js';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css';

class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            house:[]
        };
    }

    componentDidMount() {
        axios.get("/api/houses")
        .then(res => {
            this.setState({house:res.data});
            console.log("houses", this.state.houses);
        }) 
            .catch(err => console.log("error in DashBoard-get", err));
    }

    deleteHouse = id => {
        axios.delete("/api/delete/${id}")
        .then(res => {
            this.componentDidMount()
        })
        .catch(err => console.log("error in DashBoard-Delete", err));
    };

    render() {
        const {houses} = this.state
        return(
            <div>
                Dashboard {house.map(house => {
                    return(
                        <House key={house.id}

                            name={house.name}
                            address={house.address}
                            city={house.city}
                            state={house.state}
                            zip={house.zip}
                            img={house.img}
                            mortgage={house.mortgage}
                            rent={house.rent}
                            id={house.id}
                            delete={this.deleteHouse}/>
                    )
                })}
                <div>
                    <link to={'/Wizard/Step1'}>
                        <button>Add New Property</button>
                    </link>
                </div>
            </div>
        )
    }
}

export default Dashboard;
