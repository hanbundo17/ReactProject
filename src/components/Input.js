import React from 'react';
import './input.css';

function Input(){
    return(
        <div className='searchBox'>
            <input className='inputBox' placeholder='소환사 이름을 입력해주세요.'/>
            <button type='submit' className='searchBtn'>검색하기</button>
        </div>
    );
}

export default Input;