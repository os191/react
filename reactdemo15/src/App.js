import React from 'react';
import './assets/css/App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import Pcontent from './components/Pcontent';
import Login from './components/Login';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <Router>
          <div>
            <Route exact path="/" component={Home}></Route>
            <Route path="/pcontnet/:id" component={Pcontent}></Route>
            <Route path="/login" component={Login}></Route>
          </div>
      </Router>
      
    );
  }
}

export default App;