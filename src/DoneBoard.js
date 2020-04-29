import React from 'react';

export const DoneBoard = (props) => {

return(
<div className="done">
                    <h2>DONE</h2>
                    <div className="done_grid">
                    {props.text.map(Item => <div className="postIt">{Item.text}</div>)}
                    </div>
                    </div>
                    )
                    }