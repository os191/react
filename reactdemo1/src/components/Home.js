import React,{ Component } from 'react';

class Home extends Component{

    constructor(props){
        super(props);
        
        //react 定义数据
        this.state={
            name:"张三",

            age:30,

            userinfo:{
                username:"itying"
            }
        }
    }

    // jsx 语法
    render(){
        return(
            <div>
                <h2>你和React  -- 我是home 组件</h2>
                <p>姓名:{this.state.name}</p>

                
                <p>年龄:{this.state.age}</p>

                <p>对象:{this.state.userinfo.username}</p>
            </div>
        ) 
    }
}
export default Home;