import React ,{ Component } from 'react';
import Axios from './Axios';
import FetchJsonp from './FetchJsonp';

/**
 * react 获取服务器api接口
 *  
 *      react中没有提供专门的请求数据的模块。但我们可以使用第三方请求数据实现请求数据
 * 
 *      1.axios https://github.com/axios/axios    axios的作者觉得jsonp 不太友好，推荐使用CORS方式更干净(后端运行跨域)
 * 
 *          1.安装模块          npm install axios --save  / cnpm install axios --save 
 *          2.import axios from 'axios'
 *          3.看文档使用
 *          axios.get('/user?ID=12345')
                .then(function (response) {
                    // handle success
                    console.log(response);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
 * 
 *      2.fetch-jsonp   https://github.com/camsong/fetch-jsonp
 *          1.安装 npm install fetch-jsonp --save  / cnpm install fetch-jsonp --save
 *          2.import fetchJsonp from 'fetch-jsonp'
 *          3.看文档使用
 *           fetchJsonp('/users.jsonp')
                .then(function(response) {
                    return response.json()
                }).then(function(json) {
                    console.log('parsed json', json)
                }).catch(function(ex) {
                    console.log('parsing failed', ex)
                })
 * 
 *      3.其他请求数据的方法也可以。。。自己封装模块用原生js实现数据请求也可以。。。
 * 
 *  远程测试API接口
 *  
 *      get请求
 *          http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20
 * 
 *      jsonp请求地址
 *          http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&callback=?
 * 
 */

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <Axios/>
                <hr/>
                <FetchJsonp/>
            </div>
        );
    }
}

export default Home;