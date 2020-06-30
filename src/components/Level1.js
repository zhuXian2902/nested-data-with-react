/** @format */

import React from 'react';
import Level2 from './Level2';

const Level1 = (props) => {
	const { files, toggle } = props;
	// console.log(props);
	let list = files.map((file) => {
		// console.log(file.id);
		return (
			<li
				onClick={(e) => {
					toggle(e);
				}}
				key={file.val}
				id={file.id}
			>
				{file.val}
				<Level2 files={props.obj[file.id]} />
			</li>
		);
	});
	// console.log(list);

	return <ul>{list}</ul>;
};

export default Level1;
