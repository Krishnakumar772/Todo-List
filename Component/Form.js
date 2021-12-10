import React from 'react';

function Form() {
    return (  
        <div>
            <form>
                <input type="text" className="todo-input"/>
                <button type="submit" className="todo-button"> 
                <i class="fas fa-plus-square"></i>
              </button>
                <div class="select">
                    <select name="todos" className="filter-todo">
                        <option value="All">All</option>
                        <option value="Completed">Completed</option>
                        <option value="UnCompleted">UnCompleted</option>

                      </select>

                </div>
            </form>
        </div>
    );
}

export default Form;