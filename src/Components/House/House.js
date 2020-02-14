import React, { Component } from 'react';

class House extends Component {
    render() {
        return (
            <div className='House'>
                <div>Property Name:{this.props.name}</div>
                <div>Address:{this.props.address}</div>
                <div>City:{this.props.city}</div>
                <div>State:{this.props.state}</div>
                <div>Zip Code:{this.props.zip}</div>
                <div><img src={this.props.img} alt='undefined url'/></div>
                <div>Monthly Martgage:{this.props.mortgage}</div>
                <div>Desired Rent:{this.props.rent}</div>
                <button onClick={()=> this.props.delete(this.props.id)}>Delete</button>
            </div>
        );
    }
}

export default House;