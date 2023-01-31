import { NavLink, Route, Switch } from 'react-router-dom';
import './App.css';
import Charts from './components/Charts.js';
import Table from './components/Table.js';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/table">Table</NavLink>
        <NavLink to="/charts">Charts</NavLink>
      </nav>
      <Switch>
        <Route path="/table" component={Table}></Route>
        <Route path="/charts" component={Charts}></Route>
      </Switch>
    </div>
  );
}

export default App;
