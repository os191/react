import React from 'react';
/**
 * 约束性和非约束性组件：
 *      非约束性组件：
 *              <input type='text' defaultValue='a'> 这个 defaultValue 其实就是原生DOM中的 value 属性。这样写出来的组件，
 *              其value值就是用户输入的内容，React完全不管输入的过程
 * 
 *      约束性组件：
 *              <input type='text' vlue={this.state.username} onChange={this.hanldeUsername}>
 *              这里，value属性不在是一个死值，它是 this.state.username,this.state.username 是由 this.handleUsername 负责改变
 *              这个时候实际上，input 的value 根本不是用户输入的内容。而是onChange 事件触发之后，由于 this.setState 导致了一次
 *              重新渲染。
 * 
 * 
 */
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'111'
          };
    }

    handleUsername=(e)=>{
        this.setState({
            username:e.target.value
        })
    }
    render() {
        return (
            <div>
                <h2>React 表单</h2>
                <p>{this.state.username}</p>

                {/* mvvm */}
                
                <input type='text' value={this.state.username} onChange={this.handleUsername}/>

                <br/>

                {/* mv */}
                <input type='text' defaultValue={this.state.username}/>

            </div>   
        )
    }
}

export default Home;