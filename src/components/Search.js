import React from 'react';
import './search.css';
import Test from './Test'
import Info from './Info'

function search(){

    return(
        <>
        <div className='UserName'>
            소환사이름 
        </div>

        <div className='getNew'>
        <button type='submit' className='searchBtn'>갱신하기</button>
        </div>

        <div className='graph'>
            <Test />
        </div>

        <Info tier="마스터"  winrate = "65%"  photo = "photo" point= "75p"/>

        <div className='searchTop'>
            <div className='pieGraph'>그래프</div>
            <div className='mostPick'>챔프</div>
            <div className='mostPosition'>라인</div>
        </div>

        <div className='list'>
            전적
        </div>
        </>
    );
}

export default search;