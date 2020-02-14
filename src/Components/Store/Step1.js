import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import store, {Step1} from './Store/Step1';

class Step1 extends Component {
    constructor() {
        super();

        const reduxState = store.getState()
        this.state = {
            name:reduxState.name,
            address:reduxState.address,
            city:reduxState.city,
            state:reduxState.state,
            zip:reduxState.zip
        }

        this.changeState = this.changeState.bind(this)
    }

    componentDidMount(){
        store.subscribe(() => {
            const reduxState({
                name:reduxState.name,
                address:reduxState.address,
                city:reduxState.city,
                state:reduxState.state,
                zip:reduxState.zip
            })
        })
    }

    changeState(event) {
        const {value, name} = event.target.this.setState({
            [name]:value
        })
    }

    storeDispatch = () => {
        const {name, address, city, state, zip} = this.state
        store.dispatch({type:Step1, payload:{name, address, city, state, zip}})
    }
    
    render(){
        return(
            <div>

                <div>
                    <input name='name' onChange={this.changeState} placeholder='Name' />
                </div>
                <div>
                    <input name='address' onChange={this.changeState} placeholder='Address' />
                </div>
                <div>
                    <input name='city' onChange={this.changeState} placeholder='City' />
                </div>
                <div>
                    <input name='state' onChange={this.changeState} placeholder='state' />
                </div>
                <div>
                    <input name='zip' onChange={this.changeState} placeholder='zip' />
                </div>
                <Link to={'/'}><button>Back</button></Link>
                <Link to={'/wizard/step2'}><button onClick={this.storeDispatch}>Next</button></Link>
            </div>

        )
    }

}

export default Step1;