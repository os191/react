import React , {Component} from 'react';
import axios from 'axios';
import { Link} from "react-router-dom";

class Pcontent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[],
            id:'',
            url:'http://a.itying.com/'
         };
    }
    requestData=(id)=>{
        let api = this.state.url+"api/productcontent?id="+id;
        console.log(api)
        axios.get(api)
        .then((response)=>{
            console.log(response)
            this.setState({
                list:response.data.result
            })
        }).catch((error)=>{
            console.log(error)
        })
    }
    componentDidMount(){
        this.requestData(this.props.match.params.id);
    }

    render() {
        return (
            <div>
                <button><Link to="/login">跳转到登录页面</Link></button>
                <p>详情组件 -内容查看浏览器控制台</p>
            </div>
        );
    }
}

export default Pcontent;