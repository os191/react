import React from 'react'


class News extends React.Component{

    constructor(props){
        //调用父类构造行数
        super(props); // props 用户父子组件传值  固定写法

        //定义数据
        this.state={
            userinfo:"张三"
        }
    }

    render(){

        return(
            <div>
                <h2>{this.state.userinfo}</h2>
                <ul>
                    <li>这是一个列表</li>
                    <li>这是一个列表</li>
                    <li>这是一个列表</li>
                </ul>
            </div>
        )
    }
}
export default News;