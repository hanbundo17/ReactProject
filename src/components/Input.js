import React, {Component} from 'react';
import './input.css';

class Input extends Component{
    state = {
        name:''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.onCreate(this.state);

        this.setState({
            name:''
        })
    }

    render(){
    return(
        <form onSubmit={this.handleSubmit}>
        <div className='searchBox'>
            <input name='name' className='inputBox' placeholder='소환사 이름을 입력해주세요.' value={this.state.name} onChange={this.handleChange}/>
            <button type='submit' className='searchBtn' onClick={this.handleSubmit}>검색하기</button>
        </div>
        </form>
    );
    }
}

export default Input;