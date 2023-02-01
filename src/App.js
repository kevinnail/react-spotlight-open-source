import { NavLink, Route, Switch } from 'react-router-dom';
import './App.css';
import Charts from './components/Charts.js';
import TableComponent from './components/TableComponent.js';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/table">Table</NavLink>
        <NavLink to="/charts">Charts</NavLink>
      </nav>
      <Switch>
        <Route path="/table" component={TableComponent} />
        <Route path="/charts" component={Charts} />
      </Switch>
    </div>
  );
}

export default App;
