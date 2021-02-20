import logo from './logo.svg';
import './App.css';

const App =() => {
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          <div className="list-row">
            <li>これをする</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div className="list-row">
            <li>あれをする</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div className="complete-area">
        <div>
          <p className="title">完了</p>
          <ul>
            <div className="list-row">
              <li>おわった</li>
              <button>もどす</button>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
