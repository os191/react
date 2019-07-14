import React from 'react';

class ReactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:'React表单',
            name:'',
            sex:'1',
            city:'',
            citys:['北京','上海','深圳'],
            hobby:[
                {
                    'title':'睡觉',
                    'checked':true
                },
                {
                    'title':'吃饭',
                    'checked':false
                },
                {
                    'title':'敲代码',
                    'checked':true
                }
            ],
            info:''
         };
    }

    handleName=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
    handleSubmit=(e)=>{
        //组织submit提交事件
        e.preventDefault();

        console.log(this.state.name,this.state.sex,this.state.city,this.state.hobby,this.state.info);
    }

    handleSex=(e)=>{
        this.setState({
            sex:e.target.value
        })
    }

    handleCity=(e)=>{
        this.setState({
            city:e.target.value
        })
    }
    handleHobby=(key)=>{
        let hobby = this.state.hobby;
        hobby[key].checked = !hobby[key].checked;
        this.setState({
            hobby:hobby
        })
    }
   
    handleInfo=(e)=>{
        this.setState({
            info:e.target.value
        })
    }

    

    render() {
        return (
            <div>
                <h2>{this.state.msg}</h2>

                <form onSubmit={this.handleSubmit} >

                    用户名:<input type='text' value={this.setName} onChange={this.handleName}/><br/><br/>

                    性别:<input type='radio' value='1' checked={this.state.sex==1} onChange={this.handleSex}/>
                        
                         <input type='radio' value='2' checked={this.state.sex==2} onChange={this.handleSex}/><br/><br/>
                    
                    居住城市:
                        <select value={this.state.city} onChange={this.handleCity}>
                            {
                                this.state.citys.map(function(value,key){
                                    return <option key={key}>{value}</option>
                                })
                            }
                        </select><br/><br/>

                    爱好:
                    {
                        //注意this的指向
                        this.state.hobby.map((value,key)=>{
                            return (
                                <span key={key}  >
                                    
                                    <input type='checkbox' defaultChecked={value.checked} onChange={this.handleHobby.bind(this,key)}/>
                                    {value.title}

                                </span>
                            )
                        })
                    }
                    <br/><br/>

                    备注:<textarea value={this.state.info} onChange={this.handleInfo}/>
                    <br/><br/>
                    <input type="submit" defaultValue='提交'></input>
                </form>
            </div>
        );
    }
}

export default ReactForm;