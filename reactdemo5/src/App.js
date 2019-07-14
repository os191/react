import React from 'react';

import './assets/css/App.css';

import Home from './components/Home';

import ReactForm from './components/ReactForm';

class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        我是react -- 根组件

        <br/>

        <Home/>

        <br/>
        <hr/>

        <ReactForm/>
      </div>
    )
  }
}


export default App;
