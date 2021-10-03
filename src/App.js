import { Component } from 'react';
import shortid from 'shortid'

import Form from './component/Form/Form.jsx';
import TodoList from './component/TodoList/TodoList.jsx';


export default class App extends Component{


  state = {
    todos: [],
    inputForm: '',
   editTodo: false,
    notification: false,
    id: shortid.generate()
  }
  
  handleChange = e => {
       const { name, value } = e.currentTarget
    this.setState({
      [name]: value
    })
  }


  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.inputForm) {
          return     }
    const todo = {
      id: this.state.id,
      complited: false,
      text: this.state.inputForm
    }
    this.setState(prevState => ({
      todos: [...prevState.todos, todo],
      inputForm: '',
      editTodo: false,
      id: shortid.generate()
    }))
}

  
  handleDelete = todoId => {
    this.setState(({ todos }) =>( {
      todos: todos.filter(todo => todo.id !== todoId)
    }))
  }


  complitedCheckbox = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            complited: !todo.complited
          }
        } return todo
      })
    }))
    
  }

  // вынимаем из массива выбранный эл.
  handleUpdateTodo = todoId => {
    const filterTodos = this.state.todos.filter(todo => todo.id !== todoId)
   const upDateTodo = this.state.todos.find(todo => todo.id === todoId)

    this.setState({
      todos: filterTodos,
      editTodo: true,
      inputForm: upDateTodo.text,
      id: todoId
      
    })
  }

  render() {
    
    const { todos, notifikation } = this.state;

    const complitedTodo =  todos.reduce((acc, todo) => ( todo.complited ? acc + 1 : acc) , 0)
    return (
      <div>
        <Form value={this.state.inputForm} onChangeInput={this.handleChange}
          onSubmit={this.handleSubmit} editItem={this.state.editTodo} />
        
        <p className="todoComplited">Количество выполненых: {complitedTodo}</p>
       
        {todos.length > 0 && <TodoList items={todos}
          onDelete={this.handleDelete} updateCheckbox={this.complitedCheckbox}
          updateTodo={this.handleUpdateTodo}
          visible={notifikation} />}
      </div>
    )
  }
}
