import React from 'react';

import './assets/css/App.css';

import Home from './components/Home';
import News from './components/News';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }
  render() {
    return (
      <div className='App'>
          {/* <Home/> */}

          <News/>
      </div>
    );
  }
}

export default App;
