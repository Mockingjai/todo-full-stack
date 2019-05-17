import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import TodoList from "../todo-list/TodoList";
import EditTodo from '../edit-todo/EditTodo';
import CreateTodo from '../create-todo/CreateTodo';

class App extends Component {
render() {
  return (
      <Router>
          <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
                  <div className="collpase navbar-collapse">
                      <ul className="navbar-nav mr-auto">
                          <li className="navbar-item">
                              <Link to="/" className="nav-link">Todos</Link>
                          </li>
                          <li className="navbar-item">
                              <Link to="/create" className="nav-link">Create Todo</Link>
                          </li>
                      </ul>
                  </div>
              </nav>
              <br/>
              <Route path="/" exact component={TodoList}/>
              <Route path="/update/:id" component={EditTodo}/>
              <Route path="/create" component={CreateTodo}/>
          </div>
      </Router>
    );
  }
}

export default App;
