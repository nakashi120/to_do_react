import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';

const App =() => {
  const [incompleteTodos, setIncompleteTodos] = useState(["あれをする", "これをする"]);
  const [completeTodos, setCompleteTodos] = useState(["おわった"]);
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>


      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
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
