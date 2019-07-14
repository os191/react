import React from 'react';
// import logo from './assets/images/logo.svg';
// import './assets/css/App.css';

//引入组件
// import Home from './components/Home';
import News from './components/News';
class App extends React.Component{

  constructor(props){
    super(props);
  }


  render(){
    return(
      <div className="App">
          你好 React  根组件

          <hr />

          {/* <Home/> */}
          <News/>
      </div>
    )
  }
}
export default App;
