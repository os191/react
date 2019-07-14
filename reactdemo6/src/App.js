import React from 'react';

import './assets/css/App.css';

import Todolist from './components/Todolist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div className="App">
        这是react  根组件

        <br/>

        <Todolist/>

      </div>
    );
  }
}

export default App;
