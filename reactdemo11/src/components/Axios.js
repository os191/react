import React, { Component } from 'react';
import axios from 'axios';

class Axios extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[]
          };
    }
    
    //通过axios获取服务器api接口数据
    getData=()=>{

        var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';//接口后端运行跨域

        axios.get(api)
        .then((respones)=>{
            console.log(respones.data.result)
            //用到this时注意this的指向
            this.setState({
                list:respones.data.result
            })
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    render() {
        return (
            <div>
                <h2>Axios 获取服务器数据</h2>

                <button onClick={this.getData}>获取服务器api接口数据</button>
                <hr/>
                <ul>
                    {
                        this.state.list.map((value,key)=>{
                            return (
                                <li key={key}>{value.title}</li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Axios;