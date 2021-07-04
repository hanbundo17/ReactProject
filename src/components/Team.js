import React from 'react';

function Team(){
    return(
        <>
            {/* 블루팀레드팀구분? */}
            <div className='teampic'>
                <div className='teampic1'>1</div>
                <div className='teampic2'>2</div>
                <div className='teampic3'>3</div>
                <div className='teampic4'>4</div>
                <div className='teampic5'>5</div>
            </div>

            <div className='teamname'>
                <p className='teamname1'>1</p>
                <p className='teamname2'>2</p>
                <p className='teamname3'>3</p>
                <p className='teamname4'>4</p>
                <p className='teamname5'>5</p>
            </div>
        </>
    );
}

export default Team;