import React from 'react';

export const DoneBoard = (props) => {

return(
<div className="done">
                    <h2>DONE</h2>
                    <div className="done_grid">
                    {props.text.map(Item =><div className="postIt" onClick={()=> props.onHandle(Item.id)}><p className="postIt_p">{Item.text}</p></div>)}
                    </div>
                    </div>
                    )
                    }