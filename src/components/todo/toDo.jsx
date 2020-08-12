import React from 'react';

class ToDo extends React.Component {
  constructor(props){
    super(props);
    this.state={
      items: [],
      currentCurrent:{}
    }
  }

  render() {
    return (
      <div className="todo-container">
        <h1>My To Do List</h1>
        <form id="todo-form">
          <input type="text" placeholder="enter task"/>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }

}

export default ToDo