import React ,{Component} from 'react';

/**
 * React 生命周期行数:
 *      
 *      组件加载之前，组件加载完成，以及组件更新数据，组件销毁
 * 
 *      触发的一系列的方法，这就是组件的生命周期
 * 
 * 组件加载时触发的函数
 *      
 *      constructor,componetWillMount,render,componentDidMount
 * 
 * 组件更新是触发的生命周期函数
 *      shouldComponentUpdate,componentWillUpdate,render,componentDidUpdate
 * 
 * 你在父组件里面改变props传值的时候触发
 *      componentWillReceiveProps
 * 
 * 
 * 组件销毁的时候触发
 *      componentWillUnmount
 * 
 * 
 *  必须记住的生命周期行数
 *      
 *      加载的时候：componetWillMount,render,componentDidMount
 * 
 *      更新的时候:componentWillUpdate,render,componentDidUpdate
 *      
 *      销毁的时候:componentWillUnmount
 * 
 * 
 */
class Lifecycle extends Component {
    constructor(props) {

        console.log('01 构造函数')

        super(props);
        this.state = {
            msg:'我是一个组件'
          };
    }
    //组件将要挂载的时候触发的生命周期函数
    componentWillMount(){
        console.log('02 组件将要挂载')
    }

    //组件挂载完成之后触发生命周期函数
    componentDidMount(){

        //dom操作放在这个里面    请求数据放在这里面

        console.log('04 组件挂载完成')
    }
    //是否要执行更新数据，  如果返回true才会执行更新数据操作
    shouldComponentUpdate(nextProps, nextState){
        console.log('01是否要更数据')
        console.log(nextProps);
        console.log(nextState)
        return true;
    }

    // 将要更新数据的时候触发
    componentWillUpdate(){
        console.log('02组件将要更新')
    }

    //组件更新完成触发生命周期函数
    componentDidUpdate(){
        console.log('04组件更新完成')
    }

    //你在父组件里面改变props传值的时候触发
    componentWillReceiveProps(){
        console.log('父子组件传值,父组件里面改变props传值的时候触发')
    }



    setMsg=()=>{
        this.setState({
            msg:'我是改变后的msg的数据'
        })
    }

    //组件销毁的时候触发的生命周期函数    用在组件销毁的时候执行操作
    componentWillUnmount(){
        console.log('组件销毁 了')
    }
    render() {
        console.log('03 数据渲染')
        return (
            <div>
                生命周期函数演示--------{this.state.msg}------{this.props.title}
                <br/>
                <br/>
                <button onClick={this.setMsg}>更新msg的数据</button>
            </div>
        );
    }
}

export default Lifecycle;