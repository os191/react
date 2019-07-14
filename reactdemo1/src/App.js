import React, {Component} from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//引入组件
import Home from './components/Home';

import News from './components/News';
class App extends Component {
 
  render(){
    return (
      <div className="App">
        你好 react  根组件

        <Home/>
        <News/>
      </div>
    )
  }
  
}
export default App;
