import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';

class Wizard extends Component {
    render() {
        return (
            <div>
                <Route component={Step1} path='./Wizard/Step1' />
                <Route component={Step2} path='./Wizard/Step2' />
                <Route component={Step3} path='./Wizard/Step3' />
            </div>
        )
    }
}

export default Wizard;