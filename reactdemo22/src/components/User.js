import React , {Component} from 'react';
import {Route, Link } from "react-router-dom";


class User extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentDidMount(){
        console.log(this.props)
    }
    render() {
        return (
            <div className="user">
                <div className="content">
                    <div className="left">
                        <div><Link to={`${this.props.match.url}/`}>用户列表</Link></div>
                        <div><Link to={`${this.props.match.url}/add`}>用户新增</Link></div>
                        <div><Link to={`${this.props.match.url}/edit`}>用户编辑</Link></div>
                    </div>
                    <div className="right">
                        {
                            this.props.routes.map((route,key)=>{
                                return <Route exact  key={key} path={route.path} component={route.component}/>
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default User;