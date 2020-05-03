import React from "react";

export const ToDoBoard = ({ text, onHandle, handleDelete }) => {
	return (
		<div className='toDo'>
			<h2>TO DO</h2>
			<div className='toDo_grid'>
				{text.map((item) => (
					<div className='postIt'>
						<div onClick={() => onHandle(item.id)}>
							<p className='postIt_p'>{item.text}</p>
						</div>
						<img
							className='delete'
							onClick={() => handleDelete(item)}
							src={require("./img/delete.png")}
							alt='Delete'
							title='Delete'
						/>
					</div>
				))}
			</div>
		</div>
	);
};
