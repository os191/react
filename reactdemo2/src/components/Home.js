import React , {Component} from 'react';

import '../assets/css/index.css'

/**
 * react 绑定属性注意
 *  class 换成 className
 *   
 *  for 换成 htmlFor
 * 
 *  style:
 *      <div style={{'color':'red'}}> 我是一个红色的div  行内样式</div>
 * 
 * 其它的属性和以前的写法是一样的
 * 
 * 
 */
class Home extends Component{

    //数据
    constructor(props){
        super(props);//用于父子组件传值，固定写法

        this.state={
            msg:"我是一个Home组件",
            title:"我是一个title",
            color:'red',
            style:{
                color:'red',
                fontSize:'40px'
            }
        }
    }

    //jsx 模块
    render(){
        return(
            <div>
                <h2>
                    {this.state.msg}
                </h2>
                <div title="111">{this.state.title}</div>

                <br />

                <div title={this.state.title}>{this.state.title}</div>

                <br />

                <div className="red"> 我是一个红色的div</div>

                <br />

                <div className={this.state.color}> 我是一个红色的div</div>

                <br />


                <label htmlFor="name">姓名</label>

                <input id="name" />

                <br />
                <br />

                <div style={{'color':'red'}}> 我是一个红色的div  行内样式</div>

                <br />

                <div style={this.state.style}> 我是一个红色的div  行内样式</div>
            </div>
        )
    }
}
export default Home;