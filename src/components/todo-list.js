import React from 'react';
import TodoListHeader from './todo-list-header.js'

export default class TodoList extends React.Component {
  render() {
    return (
        <table>
        <TodoListHeader />
        </table>
      );
  }
}