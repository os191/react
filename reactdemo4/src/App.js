import React from 'react';
// import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//引入组件
// import Home from './components/Home';

// import List from './components/List';

import Todolist from './components/Todolist'

class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="App">
        我是react --- 根组件
        <hr/>
        {/* <Home/> */}

        {/* <List/> */}

        <Todolist/>
      </div>
    )
  }
}

export default App;
