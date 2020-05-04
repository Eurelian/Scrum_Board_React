import React from "react";

export const BacklogBoard = ({ text, onHandle, handleDelete }) => {
	return (
		<div className='backlog'>
			<h2>BACKLOG</h2>
			<div className='backlog_grid'>
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
