import React, { Component } from 'react';
import './App.css';
import TodoForm from './Component/todoform';
import TodoList from './Component/todolist';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['clean whitebeard', 'drink water', 'sleep']
    }
  }

  addNewTodo(todo) {
    this.setState({
      todos: this.state.todos.concat(todo)
    })
  }

  render() {
    return (
      <div className = "App">
        <TodoForm addNewTodoFunc = {this.addNewTodo.bind(this)} />
        <TodoList todo_data = {this.state.todos} />
      </div>
    );
  }
}


export default App;
