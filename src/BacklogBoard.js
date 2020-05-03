import React from "react";

export const BacklogBoard = ({ text, onHandle, handleDelete }) => {
	return (
		<div className='backlog'>
			<h2>BACKLOG</h2>
			<div className='backlog_grid'>
				{text.map((item) => (
					<div className='postIt'>
						<div onClick={() => onHandle(item.id)}>
							<p className='edit'>{item.text}</p>
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
