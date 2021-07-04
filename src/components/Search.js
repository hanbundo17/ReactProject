import React from 'react';
import './search.css';
import Test from './Test';
import Info from './Info';
import Position from './Position';
import Picked from './Picked';
import History from './History';
import Mininfo from './Mininfo';
import Score from './Score';
import Levcs from './Levcs';
import Item from './Item';
import Team from './Team';


// 소환사검색페이지
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
            <div className='mostPick'>
                <Picked pickedpic='바루스' champname='바루스' pickedrate='35%' win='3' lose='1' grade='2.44'/>
                <Picked pickedpic='애니' champname='애니' pickedrate='35%' win='2' lose='1' grade='2.44'/>
                <Picked pickedpic='바루스' champname='바루스' pickedrate='35%' win='3' lose='5' grade='2.44'/>
            </div>
            <div className='mostPosition'>
                <p>선호 포지션</p>
                <Position Linepic='원딜' Linename='원딜' pickrate='55%' winrate='50%'/>
                <Position Linepic='미드' Linename='미드' pickrate='50%' winrate='40%'/>
            </div>
        </div>

        <div className='list'>
            <History type='솔랭' when='2' />
            <Mininfo minipic='쓰레쉬' spell1='점멸' spell2='점화' lun1='뼈' lun2='감전' champname='쓰레쉬'/>
            <Score/>
            <Levcs/>
            <Item/>
            <Team/>
            <Team/>
        </div>
        </>
    );
}

export default search;