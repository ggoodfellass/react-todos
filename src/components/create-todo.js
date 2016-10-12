import React from 'react';

export default class CreateTodo extends React.Component {
  render() {
    return (
        <form>
          <input type="text" placeholder="What Should I Do?" />
          <button>Create</button>
        </form>
      );
  }
}