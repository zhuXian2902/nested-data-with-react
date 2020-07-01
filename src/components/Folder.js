/** @format */

import React, { Component } from 'react';
import File from './File';

class Folder extends Component {
	constructor(props) {
		super(props);
		this.state = {
			obj: {
				programFiles: ['Windows NT', 'Windows Mail', 'Windows Photo Viewer'],
				users: ['Nishant', 'Siddharth'],
				windows: ['Boot', 'File Manager'],
				pictures: ['Cat.png'],
				documents: ['ProgressReport.docx', 'DesignDoc.pdf'],
				studyMaterials: ['HTML.html', 'Css.pdf', 'JS.pdf'],
				personals: ['MyPhoto.png', 'Resume.pdf'],
				projects: ['Calculator Application', 'Notes Application'],
				office: ['Reports.docx'],
			},
		};
	}

	render() {
		// console.log(this.state, this.props);
		const { files } = this.props;
		const list = files.map((file) => {
			return (
				<li
					className="list"
					onClick={this.props.toggle}
					key={file.val}
					id={file.id}
				>
					{this.props.objState[file.id] ? 'v  ' : '>  '}
					{file.val}
					<File
						isOpen={this.props.objState[file.id]}
						files={this.state.obj[file.id]}
					/>
				</li>
			);
		});
		return <ul>{list}</ul>;
	}
}

export default Folder;
