import './App.css';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import Login from './container/Login/Login';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={() => <button><Link to="/login">login</Link></button>} />
        <Route path="/login"  component={Login} />
      </Switch>
    </div>
  );
}

export default App;
