import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/home';
import Weather from './components/weather';
import Calculator from './components/calculator';
import Menu from './containers/menu';
import ToDoList from './components/toDoList';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Menu />
                    <Route exact path='/' component={Home} />
                    <Route path='/weather' component={Weather} />
                    <Route path='/calculator' component={Calculator} />
                    <Route path='/toDoList' component={ToDoList} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
