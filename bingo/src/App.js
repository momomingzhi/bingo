import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import Board from "./component/Board";
function App() {
  return (
    <div>
      <div>나</div>
      <Board></Board>
      <div>상대편</div>
      <Board></Board>
    </div>
  );
}

export default App;
