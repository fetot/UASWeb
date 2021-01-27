import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home, AddFilm, EditFilm } from './view';
import { HeaderNav } from './component'

function App() {
    return (
        <Router>
            <header>
              <HeaderNav />
            </header>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/addfilm">
                    <AddFilm />
                </Route>
                <Route path="/edit/:id">
                    <EditFilm />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;