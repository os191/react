import React , {Component}from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

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
                  <route.component {...props} routes={route.routes} />
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
