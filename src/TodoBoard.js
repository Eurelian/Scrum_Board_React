import React from 'react';

export const ToDoBoard = (props) => {
return(
<div className="toDo">
                    <h2>TO DO</h2>
                    <div className="toDo_grid">
                    {props.text.map(Item => <div className="postIt">{Item.text}</div>)}
                    </div>
                </div>
)

}