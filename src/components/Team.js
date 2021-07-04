import React from 'react';
import './history.css';

function Team(){
    return(
        <>
            {/* 블루팀레드팀구분? */}
            <div className='teampic'>
                <div className='teamPic'>1</div>
                <div className='teamPic'>2</div>
                <div className='teamPic'>3</div>
                <div className='teamPic'>4</div>
                <div className='teamPic'>5</div>
            </div>

            <div className='teamname'>
                <p className='teamName'>소환사ID1</p>
                <p className='teamName'>소환사ID2</p>
                <p className='teamName'>소환사ID3</p>
                <p className='teamName'>소환사ID4</p>
                <p className='teamName'>소환사ID5</p>
            </div>
        </>
    );
}

export default Team;