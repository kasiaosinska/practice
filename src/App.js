import React, { Component } from 'react';
import './App.css';

const apiKey = '3f6080e54f804f0da1e144300181401';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date : new Date(),
            city: '',
            temp_c: '',
            temp_f: '',
            condition: '',
            icon: '',
            submitDisabled: true,
            dataFetched: false
        };
    }

    handleChange = (e) => {
        this.setState({
            city: e.target.value,
            submitDisabled: e.target.value === ''
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://api.apixu.com/v1/current.json?key=${apiKey}&q=${this.state.city}`, {
            method: 'GET'
        })
            .then(resp => resp.json())
            .then(body => {
                if (body && !body.error) {
                    this.setState({
                        temp_c: body.current.temp_c,
                        temp_f: body.current.temp_f,
                        condition: body.current.condition.text,
                        icon: body.current.condition.icon,
                        dataFetched: true
                    })
                } else {
                    this.setState({
                        dataFetched: false
                    })
                }
            })
    };

    renderInfo = () => {
        if (this.state.dataFetched) {
            return (
                <div>
                    <h4>Pogoda dla {this.state.city}</h4>
                    <h5>Temperatura C: {this.state.temp_c}</h5>
                    <h5>Temperatura F: {this.state.temp_f}</h5>
                    <h5>Warunki: {this.state.condition}
                        <img src={this.state.icon} />
                    </h5>
                </div>
            );
        }
    };

    render() {
        return (
            <div className="App">
                <p>Hello, it's {this.state.date.toLocaleDateString()}.</p>
                <h3>Wpisz miasto:</h3>
                <form onSubmit={this.handleSubmit}>
                    <lable>
                        Wybierz miasto:
                        <select value={this.state.city} onChange={this.handleChange}>
                            <option value=''>Wybierz miasto...</option>
                            <option value='Warsaw'>Warszawa</option>
                            <option value='London'>Londyn</option>
                            <option value='Barcelona'>Barcelona</option>
                            <option value='Paris'>Paryż</option>
                            <option value='Reykjavik'>Reykjavik</option>
                        </select>
                        <input type='submit' value='Wybierz' disabled={this.state.submitDisabled} />
                    </lable>
                </form>
                { this.renderInfo() }
            </div>
        );
    }
}

export default App;
