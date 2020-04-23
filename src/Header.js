import React from 'react';

export const Header =() => {
    return(
        <header>
    <div className="header">
        <div className="home">
            <h1>My SCRUM Board</h1>
        </div>
        <div class="share">
            <button type="button" id="load" className="share">Load Save</button>
            <button type="button" id="clear" className="share">Clear Save</button>
        </div>
    </div>
   </header>
    )
}

