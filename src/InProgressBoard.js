import React from "react";

export const InProgressBoard = ({ text, onHandle, handleDelete }) => {
	return (
		<div className='inProgress'>
			<h2>IN PROGRESS</h2>
			<div className='inProgress_grid'>
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
