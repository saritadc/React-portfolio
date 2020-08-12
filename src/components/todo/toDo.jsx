import React from 'react';

class ToDo extends React.Component {
  constructor(props){
    super(props);
    this.state={
      items: [],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now
      }
    })
  }

  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if(newItem.text !== ""){
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem:{
          text:'',
          key:''
        }
      })
    }
  }

  render() {
    return (
      <div className="todo-container">
        <h1>My To Do List</h1>
        <form id="todo-form" onSubmit={this.addItem}>
          <input type="text" placeholder="enter task" value={this.state.currentItem.text}
          onChange={this.handleInput}/>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }

}

export default ToDo