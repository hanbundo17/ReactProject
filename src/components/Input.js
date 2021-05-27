import React, {useState} from 'react';
import './input.css';

function Input(){
    const [input, setInputs] = useState({
        name : ''
    });

    const {name} = input;

    const onChange = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
    };

    return(
        <div className='searchBox'>
            <input name='name' className='inputBox' placeholder='소환사 이름을 입력해주세요.' onChange={onChange}/>
            <button type='submit' className='searchBtn'>검색하기</button>
        </div>
    );
}

export default Input;