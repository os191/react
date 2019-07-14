import React from 'react';
import './assets/css/App.css';
/**
 * react 路由得配置
 *  1. 找到官方文档 https://reacttraining.com/react-router/web/example/basic
 * 
 *  2. 按照 npm install react-router-dom --save    / cnpm install react-router-dom --save
 * 
 *  3. 找到项目得跟组件，引入react-router-dom
 *  
 *  4. 复制官方文档根组件里面得内容进行修改
 *    <Router>
 *        <Link to='/'>首页</Link>
 *        <Link to='/news'>新闻</Link>
 *        <Link to='/product'>商品</Link>
 * 
 * 
 *         <Route exact path="/" component={Home} />
          <Route path="/news" component={News} />
          <Route path="/product" component={Product} />
 *    </Router>
 *    
 *        exact 表示严格匹配
 */
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home';
import News from './components/News';
import Product from './components/Product';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <Router>
          <div>
            <header className='title'>
              <Link to="/">首页</Link>
              <Link to="/news">新闻</Link>
              <Link to="/product">商品</Link>
            </header>

            <br/>
            <br/>
            <hr/>
            <Route exact path="/" component={Home}></Route>
            <Route path="/news" component={News}></Route>
            <Route path="/product" component={Product}></Route>
          </div>
      </Router>
    );
  }
}

export default App;