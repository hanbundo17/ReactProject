import React from 'react';
import './history.css';

function History({type, when, minipic, spell1, spell2, lun1, lun2, champname, kill, death, assi, gra}){
    return(
        <>
        <div className='allInfo'>
            <div className='allLeft'>
                <p className='type'>{type}</p>
                <p className='when'>{when}일 전</p>
            </div>
            <div className='mininfo'>
                <div className='minipic'>{minipic}</div>
                <div classNmae='spell1'>{spell1}</div>
                <div classNmae='spell2'>{spell2}</div>
                <div className='lun1'>{lun1}</div>
                <div className='lun2'>{lun2}</div>
                <p className='champname'>{champname}</p>
            </div>

            <div className='score'>
                <p className='KDA'>{kill}/{death}/{assi}</p>
                <p className='gra'>{gra}:1 평점</p>
            </div>
        </div>
        </>
    );
}

export default History;