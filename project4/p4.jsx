import React from 'react';
import ReactDOM from 'react-dom';
import Example from './components/example/Example';
import States from './components/states/States';
import Header from './components/header/Header';
import './p4.css';

class Switch extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        //state 0 = example, state 1 = state
        this.state = {
            status: 0
        }
    }

    handleClick() {
        this.setState({status: !this.state.status});
    }

    render() {
        return (
            <div className="swbutton">

                <button onClick={this.handleClick}>
                    {this.state.status ? "Switch to example" : "Switch to states"}
                </button>

                <div>
                    {this.state.status ? <States /> : <Example />}
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <Header />
        <Switch />
    </div>
    ,
    document.getElementById("reactapp"),
)

export default Switch;