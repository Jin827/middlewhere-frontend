import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import Home from './components/pages/Home';
import IndexPage from './components/pages/IndexPage';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import Project from './components/pages/Project';
import './components/App.css'
// import './index.css';


const routes = (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={IndexPage}/>
        <Route path="/projects" component={Home}/>
        <Route path="/projects/:id" component={Project}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/login" component={Login}/>
      </Route>
    </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
