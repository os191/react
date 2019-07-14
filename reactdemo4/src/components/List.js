import React from 'react';

class List extends React.Component{
    constructor(props){
        super(props);

        this.state={
            username:''
        }
    }

    inputChange=()=>{
        /**
         * 获取dom节点
         *  1.给元素定义ref属性
         *      <input ref='username'/>
         *  2.通过this.refs.username 获取dom节点
         */
        let val = this.refs.username.value;
        this.setState({
            username:val
        })
    }

    getInput=()=>{
        alert(this.state.username)
    }

    inputKeyUp=(e)=>{
        // alert(e.target.value) 

        if(e.keyCode === 13){
            alert(e.target.value)

        }
    }

    inputKeyDown=(e)=>{
        if(e.keyCode === 13){
            alert(e.target.value)
        }
    }

    render(){
        return(
            <div>
                {/*
                     获取表单的值 
                        1.监听表单的改变事件
                        2.在改变事件里面获取表单输入的值  ref获取
                        3.把表单输入的值赋值给username
                        4.点击按钮的时候获取 state里面的username
                */}
                <input ref="username" onChange={this.inputChange}/><button onClick={this.getInput}>获取input的值</button>

                <br/>
                <br/>
                <hr/>
                {/* 键盘事件 */}

                <input onKeyUp={this.inputKeyUp}/>
                <br/>
                <br/>
                
                <input onKeyDown={this.inputKeyDown}/>
            </div>
        )
    }
}
export default List