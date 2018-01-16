import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './home';
import Weather from './weather';
import Calculator from './calculator';
import Menu from './menu';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Menu />
                    <Route exact path='/' component={Home} />
                    <Route path='/weather' component={Weather} />
                    <Route path='/calculator' component={Calculator} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
