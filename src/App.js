import React from 'react';
import "./App.css";
import {Header} from './Header';
import {BacklogBoard} from './BacklogBoard'
import {ToDoBoard} from './TodoBoard';
import {InProgressBoard} from './InProgressBoard';
import {DoneBoard} from './DoneBoard';
import {PostIt} from './AddPostit'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state= {postits: [{id:'0', text: `Add your task here`, position: 'backlog'}],
    display: false,   
    idcounter: 0,      
    }
  }
  
  handleDisplay(){
  this.setState({display: !this.state.display})
}

  handleSave(id){
    console.log(this.state.postits)//.filter(postit => postit.id === id)[0]
    //this.setState({PostIts: {id: this.state.idcounter}})
    //, text: document.getElementById("textInput"), position: document.getElementById("moveTo") 
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
                <BacklogBoard id={this.state.id} text={this.state.text}/>
                <ToDoBoard/>
                <InProgressBoard/>
                <DoneBoard/>              
                <PostIt display={this.state.display === true ? "" : "display"} onClick={()=>this.handleDisplay(0)} save={this.handleSave} />
  </div>


  </>
  );
}
}

export default App;
