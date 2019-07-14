import React from 'react';

//引入自定义模块
import storage from '../model/storage'

class Todolist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[]
          };
    }
   
    addData=(e)=>{
        if(e.keyCode == 13){
            //获取list数据保存在临时变量里面
            let tempList = this.state.list;
            //将input值添加到临时数组里面
            tempList.push({title:this.refs.title.value,checked:false})
            //将临时数组赋值给list
            this.setState({
                list:tempList
            })
            //将input置空
            this.refs.title.value = '';

            //执行缓存数据
            storage.set('todolist',tempList);
        }

    }
    checkboxChange=(key)=>{
        let tempList = this.state.list;
        tempList[key].checked = !tempList[key].checked;
        this.setState({
            list:tempList
        })

         //执行缓存数据
         storage.set('todolist',tempList);
    }

    removeData=(key)=>{
        let tempList = this.state.list;
        //根据下标删除list
        tempList.splice(key,1);
        this.setState({
            list:tempList
        })
         //执行缓存数据
         storage.set('todolist',tempList);
    }

    //生命周期函数,页面加载就会触发方法
    componentDidMount(){
        let list = storage.get('todolist')
        if(list){
            this.setState({
                list:list
            })
        }
    }
    render() {
        return (
            <div>
                <header className='title'>
                    <span>ToDolist</span> 
                    <input ref='title' onKeyUp={this.addData}/>    
                </header>

                <h2>待办事项</h2>
                
                <hr/>
                <ul>
                    {
                        this.state.list.map((value,key)=>{
                            if(!value.checked){
                                    return(
                                        <li key={key}>
                                            <input type='checkbox' defaultChecked={value.checked} onChange={this.checkboxChange.bind(this,key)}/>
                                            {value.title}
                                            --<button   onClick={this.removeData.bind(this,key)}>删除</button>
                                        </li>
                                    )
                            }
                        })
                    }
                </ul>
                

                <h2>已完成事项</h2>
                <ul>
                    {
                        this.state.list.map((value,key)=>{
                            if(value.checked){
                                    return(
                                        <li key={key}>
                                            <input type='checkbox' defaultChecked={value.checked} onChange={this.checkboxChange.bind(this,key)}/>
                                            {value.title}
                                            --<button onClick={this.removeData.bind(this,key)}>删除</button>
                                        </li>
                                    )
                            }
                        })
                    }
                </ul>
                <hr/>
            </div>
        );
    }
}

export default Todolist;