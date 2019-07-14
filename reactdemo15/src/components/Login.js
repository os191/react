import React , {Component} from 'react';
import { BowserRouter as Route,Router,Link,Redirect,withRouter } from 'react-router-dom'
/***
 * 实现js 跳转路由
 * 
 *  1. 要引入  
 *  import { BowserRouter as Route,Router,Link,Redirect,withRouter } from 'react-router-dom'
 * 
 *  2.定义一个 loginFlag
 *      this.state={
 *          loginFlag:false
 *      };
 *  3.render 里面判断flag 来决定是否继续
 *      if(this.state.loginFlag){
 *          return <Redirect to ={{pathname:'/'}}>
 *      }
 *  4.要执行js跳转
 *      通过js改变loginFlag的状态
 *      改变以后从新render 就可以通过Redireact 自己来跳转
 */


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loginFlag:false
         };
    }
    doLoing=(e)=>{
        e.preventDefault();
        console.log(1)
        let username = this.refs.username.value;
        let password = this.refs.password.value;
        
        console.log(1)
        if(username == 'admin' && password == '12345'){
            this.setState({
                loginFlag:true
            })
        }
    }

    render() {
        if(this.state.loginFlag){
            // return <Redirect to={{pathname :'/'}} />
            return <Redirect to='/' />
        }
        return (
            
            <div>
                <form onSubmit={this.doLoing}>
                    <input type="text" ref="username"/>
                    <br/>
                    <input type="password" ref="password"/>
                    <br/>
                    <button>执行登录</button>
                </form>
                
            </div>
        );
    }
}

export default Login;