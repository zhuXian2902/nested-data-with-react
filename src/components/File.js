/** @format */

import React from 'react';

const File = (props) => {
	// console.log(props);

	let list = props.files.map((file) => (
		<li key={file} id={file} className="list">
			{file}
		</li>
	));

	// return <ul>{list}</ul>;
	return <ul>{props.isOpen && list}</ul>;
};

export default File;
