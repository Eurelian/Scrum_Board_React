import React from "react";

export const DoneBoard = ({ text, onHandle, handleDelete }) => {
	return (
		<div className='done'>
			<h2>DONE</h2>
			<div className='done_grid'>
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
