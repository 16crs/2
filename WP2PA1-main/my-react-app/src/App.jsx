import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Menu from './Menu';
import Home from './Home';
import Client from './Client';
import Company from './Company';



function App() {
    return (
        <Router>
            <div>
                <Header />
                <div style={{ display: 'flex' }}>
                    <Menu />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/client/:clientId">
                            <Client />
                        </Route>
                        <Route path="/company/:companyId">
                            <Company />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
