import React from "react";
import "./App.css";
import { Header } from "./Header";
import { BacklogBoard } from "./BacklogBoard";
import { ToDoBoard } from "./TodoBoard";
import { InProgressBoard } from "./InProgressBoard";
import { DoneBoard } from "./DoneBoard";
// import {PostIt} from './AddPostit'

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			itemList: [],
			//id:0, text:"HELLO", board: 2
			display: false,
			currentID: 0,
		};
	}

	handleDisplay = (id) => {
		this.setState({ currentID: id });
		this.toggleDisplay();
		if (id === "new") {
			document.getElementById("moveTo").selectedIndex = 0;
			document.getElementById("textInput").value = "";
		} else {
			document.getElementById(
				"moveTo"
			).selectedIndex = this.state.itemList.filter(
				(item) => item.id === id
			)[0].board;
			document.getElementById("textInput").value = this.state.itemList.filter(
				(item) => item.id === id
			)[0].text;
		}
	};

	toggleDisplay = () => this.setState({ display: !this.state.display });

	handleAdd = (event) => {
		event.preventDefault();
		const itemList = [...this.state.itemList];

		if (this.state.currentID === "new") {
			let text = this.refs.text.value;
			let id = Math.floor(Math.random() * 100 + 1);
			let board = event.currentTarget.children[0].children[1].selectedIndex;
			this.setState({
				itemList: itemList.concat({ id, text, board }),
			});
			this.refs.text.value = "";
		} else {
			let tempID = this.state.currentID;
			let text = this.refs.text.value;
			let board = document.getElementById("moveTo").selectedIndex;
			let item = itemList.filter((item) => item.id == tempID);
			let index = itemList.indexOf(...item);
			itemList[index].text = text;
			itemList[index].board = board;
			let left = itemList.slice(0, index);
			let right = itemList.slice(index + 1);

			this.setState({ itemList: left.concat(itemList[index], right) });

			// this.setState({ itemList: [...newList, itemList[index]] });

			// let list = itemList.filter((item) => item.id != tempID);

			// this.setState({
			// 	itemList: list.concat({ tempID, text, board }),
			// });
			// console.log(list);

			// this.setState({});
			// this.setState({
			// 	itemList:
			// 		tempID,
			// 		currentText,
			// 		currentboard,
			// 	}),
		}
	};

	// we have to find a way to replace one single object in the array!

	handleDelete = (item) => {
		const itemList = [...this.state.itemList];
		const newList = itemList.filter((i) => i.id != item.id);
		this.setState({ itemList: newList });
	};

	// we have to find a way to remove one single object in the array!

	render() {
		console.log(this.state.itemList);
		return (
			<>
				<Header />
				<div className='board_grid'>
					<div className='column1'>
						<div className='hangInThere'>
							<img src={require("./img/hanginthere.png")} alt='hang in there' />
						</div>
						<div className='newPostIt'>
							<button
								className='newPostIt'
								onClick={() => this.handleDisplay("new")}
							>
								<p>Click to create new Task</p>
							</button>
						</div>
						<div className='trash'>
							<img src={require("./img/trash.png")} alt='Trash' />
						</div>
					</div>
					<BacklogBoard
						text={this.state.itemList.filter((item) => item.board === 0)}
						onHandle={this.handleDisplay}
						handleDelete={this.handleDelete}
					/>
					<ToDoBoard
						text={this.state.itemList.filter((item) => item.board === 1)}
						onHandle={this.handleDisplay}
						handleDelete={this.handleDelete}
					/>
					<InProgressBoard
						text={this.state.itemList.filter((item) => item.board === 2)}
						onHandle={this.handleDisplay}
						handleDelete={this.handleDelete}
					/>
					<DoneBoard
						text={this.state.itemList.filter((item) => item.board === 3)}
						onHandle={this.handleDisplay}
						handleDelete={this.handleDelete}
					/>

					{/* SUBMIT NEW */}

					<div className={`show ${this.state.display ? "" : "display"}`}>
						<div className='content'>
							<button
								style={{ cursor: "pointer" }}
								className='show_close'
								onClick={() => this.toggleDisplay()}
								id='closeButton'
							>
								X
							</button>
							<form onSubmit={(e) => this.handleAdd(e)}>
								<div className='moveTo'>
									<p>Section</p>
									<select nameName='moveTo' id='moveTo'>
										<option value='0'>Backlog</option>
										<option value='1'>To Do</option>
										<option value='2'>In Progress</option>
										<option value='3'>Done</option>
									</select>
								</div>

								<img src={require("./img/line.png")} alt='line' />

								{/* TEXT INPUT */}
								<textarea
									className='content'
									rows='9'
									cols='43'
									id='textInput'
									placeholder='Put your task in here!'
									ref='text'
								></textarea>

								{/*BUTTONS */}
								<div className='icon'>
									<button
										onClick={() => this.toggleDisplay()}
										className='submitbutton'
										type='submit'
									>
										<img
											className='icon'
											src={require("./img/check.png")}
											alt='Save'
										/>
									</button>
								</div>
							</form>
						</div>
					</div>

					{/* <PostIt display={this.state.display === true ? "" : "display"} onClick={()=>this.handleDisplay()} buttonTest={()=>this.textButton()} /> */}
				</div>
			</>
		);
	}
}

export default App;
