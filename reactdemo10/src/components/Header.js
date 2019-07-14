import React ,{ Component } from 'react';

//引入，验证父组件的传值合法性
import PropTypes from 'prop-types';

/**
 * 父组件给子组件传值:
 *      defaultProps:父组件传值中，如果父组件调用子组件的时候不给子组件传值，则可以在子组件中使用defaultProps定义的默认值
 * 
 * 
 *      propTypes:验证父组件的传值合法性
 * 
 *      都是定义在子组件里面
 * 
 * 
 *  https://reactjs.org/docs/typechecking-with-proptypes.html
 * 
 * 
 */
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:'我是一个头部组件'
         };
    }
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
            </div>
        );
    }
}
//给属性绑定默认值
Header.defaultProps={
    title:'标题'
}
// 通过propTypes验证父组件给子组件传值的类型
Header.propTypes={
    num:PropTypes.number
}
export default Header;