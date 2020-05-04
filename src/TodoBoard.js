import React from "react";

export const ToDoBoard = ({ text, onHandle, handleDelete }) => {
	return (
		<div className='toDo'>
			<h2>TO DO</h2>
			<div className='toDo_grid'>
				{text.map((item) => (
					<div className='postIt'>
						<button className='show_close_small' onClick={() => handleDelete(item)} >X</button>
						<div onClick={() => onHandle(item.id)}>
							<p className='edit'>{item.text}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
