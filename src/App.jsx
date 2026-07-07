import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [speedcount, setSpeedCount] = useState(0);
  const [speed, setSpeed] = useState(50);
  const [goldcount, setGoldCount] = useState(1);
  const [gold, setGold] = useState(100);
  const [level, setLevel] = useState(100);
  const [leverCount, setLeverCount] = useState(0);

  return (
    <div className="App">
      <div className="header">
        <p>Count: {count}</p>
      </div>
      <div className="main">
        <div className="market">
          <ul>
            <li>
              속도 : {speedcount}
              <button
                onClick={() => {
                  if (speedcount < 3 && count >= speed) {
                    setSpeed((speed) => speed + 50);
                    setCount((count) => count - speed);
                    setSpeedCount((speedcount) => speedcount + 1);
                  } else if (speedcount < 6 && count >= speed) {
                    setSpeed((speed) => speed + 100);
                    setCount((count) => count - speed);
                    setSpeedCount((speedcount) => speedcount + 1);
                  } else if (speedcount <= 9 && count >= speed) {
                    setSpeed((speed) => speed + 200);
                    setCount((count) => count - speed);
                    setSpeedCount((speedcount) => speedcount + 1);
                  } else if (speedcount == 10) {
                    alert("최대 속도에 도달했습니다.");
                  }
                }}
              >
                {speed}
              </button>
            </li>
            <li>
              골드 수 : {goldcount}개
              <button
                onClick={() => {
                  if (count >= gold) {
                    setGold((gold) => gold + 100);
                    setGoldCount((goldcount) => goldcount + 1);
                    setCount((count) => count - gold);
                  }
                }}
              >
                {gold}
              </button>
            </li>
            <li>
              레벨 : {leverCount}
              <button
                onClick={() => {
                  if (leverCount < 3 && count >= level) {
                    setLevel((level) => level + 100);
                    setCount((count) => count - level);
                    setLeverCount((leverCount) => leverCount + 1);
                  } else if (leverCount < 6 && count >= level) {
                    setLevel((level) => level + 200);
                    setCount((count) => count - level);
                    setLeverCount((leverCount) => leverCount + 1);
                  } else if (leverCount <= 9 && count >= level) {
                    setLevel((level) => level + 400);
                    setCount((count) => count - level);
                    setLeverCount((leverCount) => leverCount + 1);
                  } else if (leverCount == 10) {
                    alert("최대 레벨에 도달했습니다.");
                  }
                }}
              >
                {level}
              </button>
            </li>
          </ul>
        </div>
        <div
          className="clickable-div"
          onClick={() => setCount((count) => count + goldcount)}
        >
          <p>Click me</p>
        </div>
        <div className="menu">
          <ul>
            <li>상점</li>
            <li>설정</li>
            <li>로그인</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
