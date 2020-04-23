import React from 'react';

export const Boards = () =>{
    return (
        <div class="board_grid">
                <div class="column1">
                    <div class="hangInThere">
                        <img src={require("./img/hanginthere.png")} alt="hang in there"/>
                    </div>
                    <div class="newPostIt">
                        <button class="newPostIt" onclick="newPostIt.makeDiv()">
                            <p>Click to create new Task</p>
                        </button>
                    </div>
                    <div class="trash">
                        <img src={require('./img/trash.png')} alt="Trash"/>
                    </div>
                </div>
                <div class="backlog">
                    <h2>BACKLOG</h2>
                    <div class="backlog_grid">
                    </div>
                </div>
                <div class="toDo">
                    <h2>TO DO</h2>
                    <div class="toDo_grid">
                    </div>
                </div>
                <div class="inProgress">
                    <h2>IN PROGRESS</h2>
                    <div class="inProgress_grid">
                    </div>
                </div>
                <div class="done">
                    <h2>DONE</h2>
                    <div class="done_grid">
                    </div>
                </div>
            </div>
        
    
    )
}