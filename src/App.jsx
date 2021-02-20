import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';

const App =() => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["あれをする", "これをする"]);
  const [completeTodos, setCompleteTodos] = useState(["おわった"]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos)
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos)
    // alert(index);
  };

  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText} />
        <button onClick={onClickAdd}>追加</button>
      </div>


      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>


      <div className="complete-area">
        <p className="title">完了</p>
          <ul>
            {completeTodos.map((todo) => {
              return (
                <div key={todo} className="list-row">
                  <li>{todo}</li>
                  <button>もどす</button>
                </div>
              )
            })}
          </ul>
      </div>
    </>
  );
}

export default App;
