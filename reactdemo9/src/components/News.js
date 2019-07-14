import React ,{Component} from 'react';

import Header from './Header';
import Footer from './Footer';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:'我是一个新闻组件',
            title:'新闻组件'
         };
    }

    run=()=>{
        alert('我是父组件的run方法')
    }

    //获取子组件传过来的数据
    getChlidData=(result)=>{
        alert(result)
        this.setState({
            msg:result
        })
    }
    getData=()=>{
        alert(this.state.title)
    }

    //父组件主动获取子组件数据和方法
    getFooeter=()=>{
        // alert(this.refs.footer.state.msg)

        // this.refs.footer.run();

        this.refs.footer.setState({
            msg:'这是父组件传值给子组件'
        })
    }
    render() {
        return (
            <div>
                <Header title={this.state.title} run={this.run}  news={this}/>            
                <br/>
                <hr/>
                {this.state.msg}

                <br/>
                <hr/>
                <button onClick={this.getFooeter}>获取整个底部组件</button>
                <br/>
                <hr/>
                <Footer ref='footer'/>
            </div>
            
        );
    }
}

export default News;