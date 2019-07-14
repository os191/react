import React from 'react';
/**
 * 事件对象、键盘事件、表单事件、ref获取dom节点、React实现类似vue双向数据绑定
 * 
 * 对象事件：在出发DOM上某个事件时，会产生一个事件对象event。这个对象包含着所有与事件相关的信息
 * 
 */
class Home extends React.Component{
    constructor(props){
        super(props)

        this.state={
            msg:"我是一个Home组件",
            username:''

        }
    }

    run=(event)=>{
        // alert(this.state.msg)

        // console.log(event)


        // alert(event.target)   /*  获取执行事件DOM节点  */

        // event.target.style.background='red'

        //获取dom的属性
        alert(event.target.getAttribute('aid'))
    }

    //改变username的值
    inputChange=(event)=>{

        // console.log(event.target.value)
        this.setState({
            username:event.target.value
        })
    }
    //获取input框值
    getInput=()=>{
        console.log(this.state.username)
    }

    render(){
        return(
            <div>
                {this.state.msg}
                {/* 事件对象 */}
                <h2>事件对象演示</h2>

                <button aid='123' onClick={this.run}>事件对象</button>

                <br/>
                <br/>
                <hr/>

                <h2>表单事件</h2>
                {/*
                     获取表单的值 
                        1.监听表单的改变事件
                        2.在改变事件里面获取表单输入的值
                        3.把表单输入的值赋值给username
                        4.点击按钮的时候获取 state里面的username
                */}
                <input onChange={this.inputChange}/><button onClick={this.getInput}>获取input的值</button>
            </div>
        )
    }
}
export default Home;