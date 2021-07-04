import React from 'react';

function mininfo({ minipic, spell1, spell2, lun1, lun2, champname,}){
    return(
        <>
            <div className='mininfo'>
                <div className='minipic'>{minipic}</div>
                <div classNmae='spell1'>{spell1}</div>
                <div classNmae='spell2'>{spell2}</div>
                <div className='lun1'>{lun1}</div>
                <div className='lun2'>{lun2}</div>
                <p className='champname'>{champname}</p>
            </div>
        </>
    );
}

export default mininfo;