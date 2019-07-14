import React from 'react';

import './assets/css/App.css';

import Home from './components/Home';

import Lifecycle from './components/Lifecycle';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      flag:true ,
      title:'我是一个app组件的title'
    };
  }

  setFlag=()=>{
    this.setState({
      flag:!this.state.flag
    })
  }

  setTitle=()=>{
    this.setState({
      title:'我是app组件改变后触发的title'
    })
  }
  render() {
    return (
      <div>
          {/* <Home/> */}

          {
            this.state.flag ?<Lifecycle  title={this.state.title}/>:''
          }
          <br/>
          <br/>
          <hr/>
          <button onClick={this.setFlag}>挂载和销毁生命周期函数组件</button>


          <br/>
          <br/>
          <hr/>

          <button onClick={this.setTitle}>改变父组件title的值</button>
      </div>
    );
  }
}

export default App;
