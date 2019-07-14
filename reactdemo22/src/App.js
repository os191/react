import React , {Component}from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './assets/css/App.css';
import routes from './components/model/router.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <Router>
          <header className="title">
            <Link to="/">首页</Link>
            <Link to="/news">新闻</Link>
            <Link to="/user">用户</Link>
          </header>

          {
            routes.map((route,key)=>{
              if(route.exact){
                return <Route key={key} exact path={route.path}
                  render={props =>(
                    <route.component {...props} routes={route.routes}/>
                  )}
                />
              }else{
                return <Route key={key} path={route.path}
                  render={props =>(
                    <route.component {...props} routes={route.routes}/>
                  )}  
                />
              }
            })
          }

      </Router>
    );
  }
}

export default App;