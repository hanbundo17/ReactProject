import React from 'react';
import { Link } from 'react-router-dom';
import { championsearch } from '../pages';

function Categories(){
    return(
        <div>
        <ul>
            <li><Link to="App.js" exact='/main'>main</Link></li>
            <li><Link to="usersearch.js">소환사 검색</Link></li>
		    <li><Link to="championsearch.js" exact='/championsearch' component={championsearch}>챔피언별 승률 검색</Link></li>
		    <li><Link to="linesearch.js">라인별 승률 검색</Link></li>
		    <li><Link to="complexsearch.js">조합 승률 검색</Link></li>
		    <li><Link to="itemsearch.js">아이템 티어 순위 검색</Link></li>
		    <li><Link to="leadersearch.js">리더보드</Link></li>
    </ul>
        </div>
    );
}

export default Categories;