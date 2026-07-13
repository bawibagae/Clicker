import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Market from "./market";
import Setting from "./setting";
import Login from "./login";

function home() {
  const [count, setCount] = useState(0);
  const [menu, setMenu] = useState("none");
  const navigate = useNavigate();
  const [bar, setBar] = useState(0);
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
      <div className="bar">
        <div className="play-bar" style={{ width: `${bar}%` }}></div>
      </div>
      <div className="main">
        <div className="market">
          {menu === "market" && <Market />}
          {menu === "setting" && <Setting />}
        </div>
        <div
          className="clickable-div"
          onClick={() => {
            setBar((bar) => Math.min(bar + 100 / needClickCount, 100));

            if (clickCount + 1 == needClickCount) {
              setCount((count) => count + goldcount);
              setClickCount(0);
              setBar(0);
            } else {
              setClickCount((clickCount) => clickCount + 1);
            }
          }}
        >
          <p>Click me</p>
        </div>
        <div className="menu">
          <ul>
            <li>
              <button
                onClick={() => {
                  setMenu("market");
                }}
              >
                마켓
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setMenu("setting");
                }}
              >
                설정
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/login")}>로그인</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default home;
