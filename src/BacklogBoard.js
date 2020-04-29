import React from 'react';

export const BacklogBoard = (props) => {

return(

<div className="backlog">
                    <h2>BACKLOG</h2>
                    <div className="backlog_grid">
                    {props.text.map(Item => <div className="postIt" onClick={props.onHandle}>{Item.text}</div>)}
                    </div>
                </div>
             
)
}