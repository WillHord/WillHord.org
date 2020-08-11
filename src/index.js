import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Page Imports
import Homepage from './Pages/Homepage/Homepage';
import Resume from './Pages/Resume/Resume';
import Projects from './Pages/Projects/Projects';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/Login';


import test from './test';

function Website() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Homepage}/>
          <Route path='/Resume' component={Resume}/>
          <Route path='/Projects' component={Projects}/>
          <Route path='/About' component={About}/>
          <Route path='/Contact' component={Contact}/>
          <Route path='/Login' component={Login}/>
          <Route path='/test' component={test}/>
        </Switch>
      </Router>
    )
  }

ReactDOM.render(<Website />, document.getElementById('root'));
