import React , { Component } from 'react';
import fetchjsonp from 'fetch-jsonp';

class FetchJsonp extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            list:[]
        };
    }

    getData=()=>{
        let api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';

        fetchjsonp(api)
        .then((response)=>{
            return response.json()
        }).then((json)=>{
            console.log(json)
            this.setState({
                list:json.result
            })
        }).catch((error)=>{
            console.log(error)
        })
    }

    render() {
        return (
            <div>
                <h2>FetchJsonp 获取服务器jsonp接口数据</h2>
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

export default FetchJsonp;