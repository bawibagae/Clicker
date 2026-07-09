import { useState } from "react";
import axios from "axios";

function home() {
  const [count, setCount] = useState(0);
  const [speedcount, setSpeedCount] = useState(0);
  const [speed, setSpeed] = useState(50);
  const [goldcount, setGoldCount] = useState(1);
  const [gold, setGold] = useState(100);
  const [level, setLevel] = useState(1000);
  const [leverCount, setLeverCount] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [needClickCount, setNeedClickCount] = useState(10);

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
                  if (speedcount < 5 && count >= speed) {
                    setSpeed((speed) => speed + 50);
                    setCount((count) => count - speed);
                    setSpeedCount((speedcount) => speedcount + 1);
                    setNeedClickCount((needClickCount) => needClickCount - 1);
                  } else if (speedcount <= 9 && count >= speed) {
                    setSpeed((speed) => speed + 100);
                    setCount((count) => count - speed);
                    setSpeedCount((speedcount) => speedcount + 1);
                    setNeedClickCount((needClickCount) => needClickCount - 1);
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
                  if (leverCount < 5 && count >= level) {
                    setLevel((level) => level + 1000);
                    setCount((count) => count - level);
                    setLeverCount((leverCount) => leverCount + 1);
                  } else if (leverCount <= 9 && count >= level) {
                    setLevel((level) => level + 2000);
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
          onClick={() => {
            if (clickCount + 1 == needClickCount) {
              setCount((count) => count + goldcount);
              setClickCount(0);
            } else {
              setClickCount((clickCount) => clickCount + 1);
            }
          }}
        >
          <p>Click me</p>
        </div>
      </div>
    </div>
  );
}
export default home;
