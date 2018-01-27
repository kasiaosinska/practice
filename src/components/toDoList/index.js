import React, { Component } from 'react';
import './style.css';

import List from '../../containers/list'

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            items: [],
        }
    }

    handleTaskChange = (e) => {
        this.setState({task: e.target.value})
    };

    handleTask = (e) => {
        e.preventDefault();
        this.setState({items: [...this.state.items, this.state.task]})
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleTask}>
                    <input value={this.state.task} onChange={this.handleTaskChange}/>
                    <button type="submit">Dodaj</button>
                </form>
                <List items={this.state.items} />
            </div>
        )
    }
}

export default ToDoList;
