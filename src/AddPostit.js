import React from 'react';


export const PostIt = (props) => {
        return ( 
            <div className={`show ${props.display}`} id="showNew">
              <div className="content">
                <button className="show_close" id="closeButton" onClick={()=>props.onClick()}>X</button>
                <div className="moveTo">
                    <p>Section</p>
                    <select nameName="moveTo" id="moveTo">
                        <option value="0">Backlog</option>
                        <option value="1">To Do</option>
                        <option value="2">In Progress</option>
                        <option value="3">Done</option>
                    </select>
                </div>
                <img src="src/img/line.png" alt="alt"/>
                <textarea className="content" rows="9" cols="45" id="textInput"
                    placeholder="Put your task in here!"></textarea>
                <div class="icon">
                    <img className="icon" onclick="newPostIt.moveTo()" src="src/img/mark.png" alt="Move" title="Move"/>
                    <img className="icon" onClick={()=> props.save()} src="src/img/check.png" alt="Save" title="Save"/>
                    <img className="icon" onclick="newPostIt.deleteTodo()" src="src/img/delete.png" alt="Delete" title="Delete"/>
                </div>
            </div>
        </div>
        )
    

}