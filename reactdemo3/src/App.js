import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';
 
//引入组件
import Home from './components/Home';

class App extends React.Component{
   constructor(props){
      super(props);
   }

   render(){
     return(
       <div>
          你好react -- 根组件
          <Home/>
       </div>
     )
   }
}


export default App;
