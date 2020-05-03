import React from "react";

export const InProgressBoard = ({ text, onHandle, handleDelete }) => {
	return (
		<div className='inProgress'>
			<h2>IN PROGRESS</h2>
			<div className='inProgress_grid'>
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
