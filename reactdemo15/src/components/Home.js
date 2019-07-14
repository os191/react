import React ,{Component} from 'react';
import axios from 'axios';
import { Link} from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[],
            url:'http://a.itying.com/'
         };
    }
    
    requestData=()=>{
        let api = this.state.url+'api/productlist';
        axios.get(api)
        .then((response)=>{
            console.log(response.data.result);
            this.setState({
                list : response.data.result
            })
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    //生命周期函数，组件加载完成触发
    componentDidMount(){
        this.requestData();
    }
    render() {
        return (
            <div className='home'>
                {
                    this.state.list.map((value,key)=>{
                        return(
                            <div key={key}>
                                <h3 className="item_cate">{value.title}</h3>
                                <ul className="item_list">
                                    {
                                        value.list.map((v,k)=>{
                                            return(
                                                <Link key={k} to={`/pcontnet/${v._id}`}>
                                                    <li>
                                                        <div className="inner">
                                                            <img src={`${this.state.url}${v.img_url}`} ></img>
                                                            <p className="title">{v.title}</p>
                                                            <p className="price">￥{v.price}</p>
                                                        </div>
                                                    </li>
                                                </Link>
                                            )
                                        })
                                    }

                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Home;