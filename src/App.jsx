import logo from './logo.svg';
import './App.css';

const App =() => {
  return (
    <>
      <div>
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div>
        <p>未完了のTODO</p>
        <ul>
          <div>
            <li>これをする</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div>
            <li>あれをする</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div>
        <div>
          <p>完了</p>
          <ul>
            <div>
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
