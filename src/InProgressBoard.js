import React from 'react';

export const InProgressBoard = (props) => {

return(
<div className="inProgress">
                    <h2>IN PROGRESS</h2>
                    <div className="inProgress_grid">
                    {props.text.map(Item =><div className="postIt" onClick={()=> props.onHandle(Item.id)}><p className="postIt_p">{Item.text}</p></div>)}
                    </div>
                </div>
)
                }