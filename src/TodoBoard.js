import React from 'react';

export const ToDoBoard = (props) => {
return(
<div className="toDo">
                    <h2>TO DO</h2>
                    <div className="toDo_grid">
                    {props.text.map(Item =><div className="postIt" onClick={()=> props.onHandle(Item.id)}><p className="postIt_p">{Item.text}</p></div>)}
                    </div>
                </div>
)

}