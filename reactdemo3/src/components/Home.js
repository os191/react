import React from 'react';

/**
 * 组件传值
 */
class Home extends React.Component{
    constructor(props){
        super(props);

        this.state={
            msg:'我是一个home组件',

            message:"我是一个message",

            username:'itying'
        }

        //第二种改变this指向的方法
        this.getMessage = this.getMessage.bind(this);
    }

    run(){
        alert('我是一个run方法')
    }

    getData(){
        alert(this.state.msg)
    }

    getName=()=>{
        alert(this.state.username)
    }

    getMessage(){
        alert(this.state.message)
    }

    //第三种改变this当前指向
    setData=()=>{
        //改变state里面的值
        this.setState(
            {
                msg:'我是一个Home组件 这是改变后的值'
            }
        )
    }

    //执行方法传值
    setName=(str)=>{
        this.setState({
            username:str
        })
    }

    setMessage=(msg,message)=>{
        this.setState({
               msg:msg,
               message:message 
        })
    }

    render(){
        return(
            <div>
                <h2>{this.state.msg}</h2>

                <h2>{this.state.message}</h2>

                <h2>{this.state.username}</h2>

                <button onClick={this.run}>执行方法</button>

                <br/>
                <br/>
                <button onClick={this.getData.bind(this)}>获取数据--第一种改变this当前指向的方法</button>

                <br/>
                <br/>
                <button onClick={this.getMessage}>获取数据--第二种改变this当前指向的方法</button>

                <br/>
                <br/>
                <button onClick={this.getName}>获取数据--第三种改变this当前指向的方法</button>
                
                <br/>
                <br/>
                <button onClick={this.setData}>改变state里面的值</button>

                <br/>
                <br/>
                <button onClick={this.setName.bind(this,"张三")}>执行方法传值</button>

                <br/>
                <br/>
                <button onClick={this.setMessage.bind(this,"张三",'李四')}>执行方法传值---多个</button>
            </div>
        )
    }
}
export default Home;