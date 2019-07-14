import React , {Component} from 'react';

//url 模块来解析url 地址      在react  里面使用url模块需要安装url模块，   cnpm install url --save
import url from 'url';

class ProductContent extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         };
    }
    
    //生命周期行数
    componentDidMount(){
        //获取get传值
        console.log(this.props)
        console.log(this.props.location.search)
        console.log(url.parse(this.props.location.search,true))
        console.log(url.parse(this.props.location.search,true).query.aid)
    }
    render() {
        return (
            <div>
                我是商品详情组件
            </div>
        );
    }
}

export default ProductContent;