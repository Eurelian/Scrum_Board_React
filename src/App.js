import React from 'react';
import "./App.css";
import {Header} from './Header';
import {BacklogBoard} from './BacklogBoard'
import {ToDoBoard} from './TodoBoard';
import {InProgressBoard} from './InProgressBoard';
import {DoneBoard} from './DoneBoard';
// import {PostIt} from './AddPostit'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={ itemList: [{}],
  //id:0, text:"HELLO", board: 2
                display: false,
               currentID: 0         
    };
  }
  

  handleDisplay = (id) => {
    this.setState({currentID: id})
    this.toggleDisplay()
    if (id === "new") {
      document.getElementById("moveTo").selectedIndex = 0
      document.getElementById("textInput").value = ""
    }
    else {
      document.getElementById("moveTo").selectedIndex = this.state.itemList.filter(item => item.id === id)[0].board;
      document.getElementById("textInput").value = this.state.itemList.filter(item => item.id === id)[0].text;
    }
}

  toggleDisplay  = () =>  this.setState({display: !this.state.display})
 

  handleAdd = (event) => {
    event.preventDefault();
    if (this.state.currentID === "new") {
        let text = this.refs.text.value;
        let id = Math.floor((Math.random()*100)+1);
        let board = event.currentTarget.children[0].children[1].selectedIndex
        this.setState({itemList: this.state.itemList.concat({id, text, board})})
        this.refs.text.value= "";
        }
        else{
          let currentboard = document.getElementById("moveTo").selectedIndex
          let currenttext  = document.getElementById("textInput").value
          let tempID = this.state.currentID
          this.setState({itemList: this.state.itemList.concat({tempID, currenttext,currentboard})})

          // we have to find a way to replace one single object in the array!
        }
    }


    handleDel = (event) => {
      // we have to find a way to remove one single object in the array!


  render(){

  return ( 
  <>  
  <Header/>
  <div className="board_grid">
          <div className="column1">
                    <div className="hangInThere">
                        <img src={require("./img/hanginthere.png")} alt="hang in there"/>
                    </div>
                <div className="newPostIt">
                        <button className="newPostIt" onClick={()=>this.handleDisplay("new")}>
                            <p>Click to create new Task</p>
                        </button>
              </div>
              <div className="trash">
                        <img src={require('./img/trash.png')} alt="Trash"/>
              </div>
            </div>
                <BacklogBoard text={this.state.itemList.filter(item => item.board ===0)} onHandle={this.handleDisplay} />
                <ToDoBoard text={this.state.itemList.filter(item => item.board ===1)} onHandle={this.handleDisplay}/>
                <InProgressBoard text={this.state.itemList.filter(item => item.board ===2)}  onHandle={this.handleDisplay} />
                <DoneBoard text={this.state.itemList.filter(item => item.board ===3)} onHandle={this.handleDisplay} /> 


{/* SUBMIT NEW */}
            
             <div className={`show ${this.state.display ? '' : 'display'}`}>
              <div className="content">
                <button className="show_close" onClick={()=>this.toggleDisplay()} id="closeButton">X</button>
                <form   onSubmit={(e) => this.handleAdd(e)}>
                <div className="moveTo">
                    <p>Section</p>
                    <select nameName="moveTo" id="moveTo">
                        <option value="0">Backlog</option>
                        <option value="1">To Do</option>
                        <option value="2">In Progress</option>
                        <option value="3">Done</option>
                    </select>
                </div>

                <img src={require("./img/line.png")} alt="line"/>
                
                {/* TEXT INPUT */}
                <textarea className="content" rows="9" cols="45" id="textInput" 
                    placeholder="Put your task in here!" ref="text"></textarea>

                {/*BUTTONS */}
                <div className="icon">
                    <img className="icon" src={require("./img/mark.png")} alt="Move" title="Move"/>
                    <button onClick={()=>this.toggleDisplay()} className="submitbutton" type="submit"><img className="icon" src={require("./img/check.png")} alt="Save"/></button>
                    <img className="icon"  src={require("./img/delete.png")} alt="Delete" title="Delete"/>
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
