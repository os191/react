import React from 'react';

class Todolist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[]
         };
    }

    addData=()=>{
            // alert(this.refs.title.value)
            // this.state.list = this.refs.title.value;
            var tempList = this.state.list;
            tempList.push(this.refs.title.value);
            this.setState({
                list:tempList
            })
            this.refs.title.value = '';
            // alert(this.state.list)
    }

    removeData=(key)=>{
        // alert(key)
        let tempList = this.state.list;
        tempList.splice(key,1);
        this.setState({
            list:tempList
        })
    }
    render() {
        return (
            <div>
                <h2>React Todolist案例演示</h2>

                <input ref="title"/> <button onClick={this.addData}>增加+</button>

                <hr/>

                <ul className='list'>
                    {/* 用到this，要注意this指向  */}
                    {
                        this.state.list.map((value,key)=>{
                            return <li key={key}>{value}<button onClick={this.removeData.bind(this,key)}>删除-</button></li>
                        })
                    }
                    {/* <li>录制react  <button>删除-</button></li> */}
                </ul>
            </div>
        );
    }
}

export default Todolist;