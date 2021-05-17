import React from 'react';
import './champion.css';

function chamipon(){
    return(
        <>
        <div className='champBox'></div>
        <div className='cpSearch'>
            <input className='cpInput' placeholder='챔피언 이름을 입력해주세요.'/>
            <button type='submit' className='cpBtn'>검색하기</button>
        </div>
        </>
    );
}

export default chamipon;