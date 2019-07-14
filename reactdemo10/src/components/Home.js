import React ,{ Component } from 'react';

import Header from './Header';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title:'首页组件',
            count:20
         };
    }
    render() {
        return (
            <div>

                {/* <Header title={this.state.title} /> */}

                {/* <Header/> */}

                {/* <Header title={this.state.title} num='aaaaa'/> */}

                <Header title={this.state.title} num={this.state.count}/>
                <br/>
                <hr/>
                这是首页组件的内容
            </div>
        );
    }
}

export default Home;