/** @format */

import React, { Component } from 'react';
import Level2 from './Level2';

class Documents extends Component {
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
					{file.val}
					<Level2
						isOpen={this.props.objState[file.id]}
						files={this.state.obj[file.id]}
					/>
				</li>
			);
		});
		return <ul>{list}</ul>;
	}
}

export default Documents;
