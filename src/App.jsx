import routes from './router';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={() => {<Redirect to="/home" />}} />
          {routes.map((item) => {
            return (
              <Route
                path={item.link}
                key={item.name}
                exact={item.exact}
                render={() => {
                  return <item.component />;
                }}
              />
            );
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
