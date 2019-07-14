import React ,{Component} from 'react';

import axios from 'axios';

class Axios extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            list:[]
        };
    }
    getData=()=>{
          let api ='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';//接口后端运行跨域

          axios.get(api)
          .then((response)=>{
                this.setState({
                    list:response.data.result
                })
          }).catch((error)=>{
              console.log(error)
          })
    }
    //组件加载完成后执行生命周期函数
    componentDidMount(){
        this.getData();
    }
    render() {
        return (
            <div>
                <h2>使用Axios 获取服务器api接口数据</h2>
                <button onClick={this.getData}>获取服务器api数据</button>
                <hr/>
                <ul>
                    {
                        this.state.list.map((value,key)=>{
                            return <li key={key}>{value.title}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Axios;