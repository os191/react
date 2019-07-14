import React ,{Component} from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:'这是一个头部组件'
         };
    }

    getNews=()=>{
        // alert(this.props.news.state.msg);

        this.props.news.getData();
    }
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>

                <button onClick={this.props.run}>调用News父组件的run方法</button>

                <br/><br/><br/>
                <button onClick={this.props.news.getData}>获取news组件getData方法</button>

                <br/><br/><br/>
                <button onClick={this.getNews}>获取整个news组件实例</button>

                <br/><br/><br/>
                <button onClick={this.props.news.getChlidData.bind(this,'我是子组件的数据')}>子组件给父组件传值</button>
            </div>
        );
    }
}

export default Header;