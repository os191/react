import React , {Component} from 'react';
import { Button ,DatePicker ,Input,InputNumber,Table   } from 'antd';
import Storage from './model/Storage.js';

const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Account',
      dataIndex: 'account',
      key: 'account',
    },
    {
        title: 'Actions',
        dataIndex: 'actions',
        key: 'actions',
      },
  ];
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            date:'',
            title:'',
            account:'',
            list:[]
         };
    }
    getData=(date, dateString)=>{
        this.setState({
            date:dateString
        })
    }
    getTitle =(e)=>{
        this.setState({
            title:e.target.value
        })
    }
    getAccount=(value)=>{
        this.setState({
            account:value
        })
        
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        console.log(this.state.date,this.state.title,this.state.account);
        if(this.state.date === '' || this.state.title === '' || this.state.account === ''){
            alert("参数不能为空")
            return;
        }
        let templist = this.state.list;
        templist.push({
            date:this.state.date,
            title:this.state.title,
            account:this.state.account,
            key:templist.length
        })
        this.setState({
            list:templist
        })
        Storage.set("list",templist)
    }
    componentDidMount(){
        let list = Storage.get("list");
        if(list){
            this.setState({
                list:list
            })
        }
    }
    render() {
        return (
            <div className="home">
                <h2 className="title">Records</h2>
                <div className="cdb">
                    <div className="credit">
                        <div className="credit-name">
                            Credit
                        </div>
                        <div className="credit-price">
                            $ 20
                        </div>
                    </div>
                   <div className="debit">
                        <div className="debit-name">
                            Debit
                        </div>
                        <div className="debit-price">
                            $ 20
                        </div>
                   </div>
                   <div className="balance">
                        <div className="balance-name">
                            Balance
                        </div>
                        <div className="balance-price">
                            $ 20
                        </div>
                   </div>
                    
                </div>
                <div className="input">
                    <form onSubmit={this.handleSubmit}>
                        <DatePicker onChange={this.getData} placeholder="Date" />
                        <Input placeholder="Title" onChange={this.getTitle} />
                        <InputNumber placeholder="Account" min={1} max={10} onChange={this.getAccount} />
                        <Button type="primary"  htmlType="submit" >Create record</Button>
                    </form>
                </div>
                <div className="table">
                    <Table dataSource={this.state.list} columns={columns} />
                </div>
            </div>
        );
    }
}

export default Home;