import React ,{ Component } from 'react';
import { Button } from 'antd';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div className="App">
          <Button type="primary">Button</Button>
        </div>
    );
  }
}

export default App;