import React from 'react';
import ReactDOM from 'react-dom';
import Example from './components/example/Example';
import States from './components/states/States';
import Header from './components/header/Header';
import {HashRouter, Route, Link} from "react-router-dom";
import './p5.css';

ReactDOM.render(
    <HashRouter>
        <div>
            <Header />
            <div className="switch">
            <button>
                <Link to="/states" className="states">
                    States
                </Link>
            </button>
            <button>
                <Link to="/example" className="example">
                    Example
                </Link>
            </button>
            </div>
            <Route path="/states" component={States}/>
            <Route path="/example" component={Example}/>
        </div>
    </HashRouter>,
    document.getElementById("reactapp"),
)
