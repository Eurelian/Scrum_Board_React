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
    this.state={
      newItem: [
      {itemId: "",
    textValue: "" }],

   display: false,
         
    }
  }
  
  handleDisplay(){
  this.setState({display: !this.state.display})
   
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
                <BacklogBoard/>
                <ToDoBoard/>
                <InProgressBoard/>
                <DoneBoard/>              
                <PostIt display={this.state.display === true ? "" : "display"} onClick={()=>this.handleDisplay()} />
  </div>


  </>
  );
}
}

export default App;
