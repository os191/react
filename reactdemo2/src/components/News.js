import React from 'react';

import '../assets/css/index.css';

//引入图片
import logo from '../assets/images/1.jpg'


class News extends React.Component{
    
    constructor(props){
        super(props);

        this.state={
            msg:"新闻",
            list:['1111111111111','22222222222222'],

            list2:[<h2 key="2">我是一个h2</h2>,<h2 key="1">我是一个h2</h2>],

            list3:[
                {title:'新闻1111'},
                {title:'新闻2222'},
                {title:'新闻3333'},
                {title:'新闻4444'},
                {title:'新闻5555'},
                {title:'新闻6666'}
            ]
        }
    }

    // jsx 模板
    render(){

        let listResult = this.state.list.map(function(value,key){
            return <li key={key}>{value}</li>
        });

        return(
            <div className="news">
                {this.state.msg}
               

                <img src={logo}/>
               

                <img src={require('../assets/images/1.jpg') }/>

                <img src="http://hbimg.b0.upaiyun.com/828e72e2855b51a005732f4e007c58c92417a61e1bcb1-61VzNc_fw658"></img>

                <hr/>
                <hr/>

                {this.state.list2}
                <ul>
                    {listResult}
                </ul>
                
 
                <hr />

                <ul>
                    {
                        this.state.list3.map(function(value,key){
                            return(
                                <li key={key}>{value.title}</li>
                            )
                        })




                    }
                </ul>
            </div>
        )
    }
}
export default News;