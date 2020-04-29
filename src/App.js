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
    this.state={ itemList: [{id:0, text:"HELLO", board: 0}],
               display: false         
    }
  }
  
  handleDisplay(){
  this.setState({display: !this.state.display})   
}
 

  handleAdd(event){
  event.preventDefault();
  console.log(event.currentTarget.children[0].children[1].selectedIndex)
  let text = this.refs.text.value;
  let id = Math.floor((Math.random()*100)+1);
  let board = event.currentTarget.children[0].children[1].selectedIndex
  console.log(this.refs.text.value)
  this.setState({itemList: this.state.itemList.concat({id, text, board})})
  this.refs.text.value= "";
   }


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
                        <button className="newPostIt" onClick={()=>this.handleDisplay()}>
                            <p>Click to create new Task</p>
                        </button>
              </div>
              <div className="trash">
                        <img src={require('./img/trash.png')} alt="Trash"/>
              </div>
            </div>
                <BacklogBoard text={this.state.itemList.filter(item => item.board ==0)} />
                <ToDoBoard text={this.state.itemList.filter(item => item.board ==1)} />
                <InProgressBoard text={this.state.itemList.filter(item => item.board ==2)} />
                <DoneBoard text={this.state.itemList.filter(item => item.board ==3)} /> 


{/* SUBMIT NEW */}
            
             <div className={`show ${this.state.display ? "" : "display"}`}>
              <div className="content">
                <button className="show_close" onClick={()=>this.handleDisplay()} id="closeButton">X</button>
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

                <img src={require("./img/line.png")}/>
                
                {/* TEXT INPUT */}
                <textarea className="content" rows="9" cols="45" id="textInput" 
                    placeholder="Put your task in here!" ref="text"></textarea>

                {/*BUTTONS */}
                <div class="icon">
                    <img className="icon" src={require("./img/mark.png")} alt="Move" title="Move"/>
                    <button onClick={()=>this.handleDisplay()} className="submitbutton" type="submit"><img className="icon" src={require("./img/check.png")} alt="Save"/></button>
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
