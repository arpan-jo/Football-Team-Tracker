import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Details from './Components/Details/Details';
import Nomatch from './Components/Nomatch/Nomatch';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/home">
                    <Home />
                </Route>

                <Route path="/team/:idTeam">
                    <Details />
                </Route>

                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="*">
                    <Nomatch />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
