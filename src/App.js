/** @format */

import React, { Component } from 'react';
import './App.css';
import Folder from './components/Folder';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			objState: {
				C: false,
				D: false,
				E: false,
				programFiles: false,
				users: false,
				windows: false,
				pictures: false,
				documents: false,
				studyMaterials: false,
				personals: false,
				projects: false,
				office: false,
			},
			obj: {
				C: [
					{ id: 'programFiles', val: 'Program Files' },
					{ id: 'users', val: 'Users' },
					{ id: 'windows', val: 'Windows' },
				],
				D: [
					{ id: 'personals', val: 'Personals' },
					{ id: 'projects', val: 'Projects' },
					{ id: 'office', val: 'Office' },
				],
				E: [
					{ id: 'pictures', val: 'Pictures' },
					{ id: 'documents', val: 'Documents' },
					{ id: 'studyMaterials', val: 'Study Materials' },
				],
			},
		};
	}

	toggle = (e) => {
		e.stopPropagation();
		const { id } = e.target;
		// console.log(id);
		this.setState((prev) => {
			const { objState } = prev;
			return {
				objState: { ...objState, [id]: !objState[id] },
			};
		});
	};

	render() {
		// console.log(this.state);
		// console.log(this.state.objState[this.state.currId]);
		return (
			<div>
				<h1>Nested Data Representation</h1>
				<ul className="container">
					<div id="C" className="list" onClick={this.toggle}>
						{this.state.objState.C ? 'v Local Disk (C:)' : '> Local Disk (C:)'}
						{this.state.objState.C && (
							<Folder
								toggle={this.toggle}
								files={this.state.obj.C}
								obj={this.state.obj}
								objState={this.state.objState}
							></Folder>
						)}
					</div>
					<div id="D" className="list" onClick={this.toggle}>
						{this.state.objState.D ? 'v Local Disk (D:)' : '> Local Disk (D:)'}
						{this.state.objState.D && (
							<Folder
								toggle={this.toggle}
								files={this.state.obj.D}
								obj={this.state.obj}
								objState={this.state.objState}
							></Folder>
						)}
					</div>
					<div id="E" className="list" onClick={this.toggle}>
						{this.state.objState.E ? 'v Local Disk (E:)' : '> Local Disk (E:)'}
						{this.state.objState.E && (
							<Folder
								toggle={this.toggle}
								files={this.state.obj.E}
								obj={this.state.obj}
								objState={this.state.objState}
							></Folder>
						)}
					</div>
				</ul>
			</div>
		);
	}
}

export default App;
