import React, { Component } from 'react';
import { Home } from './components/Home.js';
import { About } from './components/About.js';
import { Contact } from './components/Contact.js';
import { Navbar } from './components/Navbar/Navbar.js';
import { HashRouter as Router, Redirect, Switch, Route } from 'react-router-dom';
import { Casos } from './components/Casos/Casos.js';
import { CreateCases } from './components/Casos/CreateCases.js';
// import './App.css';

// const routes = [
//   { path: '/home',
//     component: Home
//   },
//   { path: '/casos',
//     component: Casos,
//     routes: [
//       { path: '/casos/todos',
//         component: Casos,
//       },
//       { path: '/casos/borradores',
//         component: Casos
//       }
//     ]
//   }
// ]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home}/>
                <Redirect exact path="/casos" to="/casos/todos" />
                <Route path="/casos" component={Casos}/>
                <Route path="/create-case" component={CreateCases}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
