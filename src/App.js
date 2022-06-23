
import { BrowserRouter as Router, Switch, Route, Navlink } from 'react-router-dom'; 
import ListPage from './ListPage';
import EndangeredDetails from './EndangeredDetails';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header><h1>WELCOME</h1></header>
        <ul>
          <li>
            <Navlink exact activeClassName="active-link" to="/">List Page</Navlink>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <ListPage />
          </Route>
          <Route exact path="/animals/:id">
            <EndangeredDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
