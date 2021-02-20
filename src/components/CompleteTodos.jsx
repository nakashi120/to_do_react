import React from 'react';

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props
  return (
    <div className="complete-area">
      <p className="title">完了</p>
        <ul>
          {todos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>もどす</button>
              </div>
            )
          })}
        </ul>
    </div>
  )
};
