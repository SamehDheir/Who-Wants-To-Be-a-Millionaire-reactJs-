import { useEffect, useState, useMemo } from "react";
import "./App.css";
import { Trivia } from "./components/trivia/Trivia";
import questions from "../src/questions.json";
import Timer from "./components/Timer";
import { Start } from "./components/Start";

function App() {
  const data = useMemo(
    () =>
      [
        {
          id: 1,
          amount: "$ 100",
        },
        {
          id: 2,
          amount: "$ 200",
        },
        {
          id: 3,
          amount: "$ 300",
        },
        {
          id: 4,
          amount: "$ 500",
        },
        {
          id: 5,
          amount: "$ 1000",
        },
        {
          id: 6,
          amount: "$ 2000",
        },
        {
          id: 7,
          amount: "$ 4000",
        },
        {
          id: 8,
          amount: "$ 8000",
        },
        {
          id: 9,
          amount: "$ 16000",
        },
        {
          id: 10,
          amount: "$ 32000",
        },
        {
          id: 11,
          amount: "$ 64000",
        },
        {
          id: 12,
          amount: "$ 125000",
        },
        {
          id: 13,
          amount: "$ 250000",
        },
        {
          id: 14,
          amount: "$ 500000",
        },
        {
          id: 15,
          amount: "$ 1000000",
        },
      ].reverse(),
    []
  );
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(data.find((m) => m.id === questionNumber - 1).amount);
  }, [data, questionNumber]);

  return (
    <div className="App">
      {userName ? (
        <>
          <div className="main">
            {stop ? (
              <h1 className="endText">Yow Earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={questions}
                    setStop={setStop}
                    setQuestionNumber={setQuestionNumber}
                    questionNumber={questionNumber}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {data.map((val) => {
                return (
                  <li
                    className={
                      questionNumber === val.id
                        ? "moneyListItem active"
                        : "moneyListItem"
                    }
                    key={val.id}
                  >
                    <span className="moneyListItemNumber">{val.id}</span>
                    <span className="moneyListItemAmount">{val.amount}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      ) : (
        <Start setUserName={setUserName} />
      )}
    </div>
  );
}

export default App;
