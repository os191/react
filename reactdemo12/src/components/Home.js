import React, {Component} from 'react';

import Axios from './Axios';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <Axios/>
            </div>
        );
    }
}

export default Home;