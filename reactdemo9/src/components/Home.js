import React from 'react';

/**
 *  React 中的组件:解决html 标签构建应用的不足
 * 
 *  是用组件的好处:把公共的功能单独抽离成一个文件作为一个组件，哪里使用哪里引入
 * 
 *  父子组件：组件的相互调用，我们把调用者称.为父组件，被调用者称为子组件
 * 
 *  父子组件传值（react 父子组件通信）:
 *      
 *      父组件给子组件传值
 *          1.在调用子组件的时候定义一个属性，<Header mag='首页'><Header/>
 *          2.子组件里面 this.props.msg
 * 
 *          说明:父组件不仅可以给子组件传值，还可以给子组件传方法，以及把整个父组件传给子组件
 * 
 *      父组件主动获取子组件的数据
 *          1.调用子组件的时候指定ref的值 <Header ref='header'><Header/>
 *          2.通过this.refs.header 获取整个组件的实例  DOM加载完成后获取
 * 
 */

import Header from './Header';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            msg:'我是一个首页组件',
            title:'首页组件'
        };
    }
    render() {
        return (
            <div>
                <Header title={this.state.title}/>
                <br/>
                <hr/>
                {this.state.msg} 
            </div>
        );
    }
}

export default Home;