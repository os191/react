import React , {Component} from 'react';
import {Route, Link } from "react-router-dom";

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="news">
                <div className="content">
                    <div className="left">
                        <div><Link to={`${this.props.match.url}/`}>新闻列表</Link></div>
                        <div><Link to={`${this.props.match.url}/add`}>新闻新增</Link></div>
                        <div><Link to={`${this.props.match.url}/edit`}>新闻编辑</Link></div>
                    </div>
                    <div className="right">
                        {
                            this.props.routes.map((route,key)=>{
                                return <Route key={key} exact path={route.path} component={route.component} />
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default News;