import React , {Component} from 'react';


class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
          };
    }
    //生命周期函数
    componentDidMount(){
        //获取动态路由传值
        console.log(this.props)
        console.log(this.props.match.params.aid)
    }
    render() {
        return (
            <div>
                我是详情组件
               
            </div>
        );
    }
}

export default Content;