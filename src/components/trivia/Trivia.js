import React, { useEffect, useState } from "react";
import "./trivia.css";
import useSond from "use-sound";
import play from "../../assests/sounds/play.mp3";
import correct from "../../assests/sounds/correct.mp3";
import wait from "../../assests/sounds/wait.mp3";
import wrong from "../../assests/sounds/wrong.mp3";

export const Trivia = ({
  data,
  setStop,
  setQuestionNumber,
  questionNumber,
}) => {
  const [question, setQuestion] = useState(null);
  const [selectAnswer, setSelectAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [playSound, setPlaySound] = useSond(play);
  const [correctAnswer, setCorrectAnswer] = useSond(correct);
  const [waitSound, setWaitSound] = useSond(wait);
  const [wrongAnswer, setWrongAnswer] = useSond(wrong);

  useEffect(() => {
    playSound();
  }, [playSound]);

  const handelClick = (answer) => {
    setSelectAnswer(answer);
    setClassName("answer active");
    delay(3000, () => {
      setClassName(answer.correct ? "answer correct" : "answer wrong");
    });
    delay(5000, () => {
      if (answer.correct) {
        delay(1000, () => {
          correctAnswer();
          setQuestionNumber((prev) => prev + 1);
          setSelectAnswer(null);
        });
      } else {
        delay(1000, () => {
          wrongAnswer();
          setStop(true);
        });
      }
    });
  };

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers ">
        {question?.answers.map((answer) => {
          return (
            <div
              className={selectAnswer === answer ? className : "answer"}
              onClick={() => handelClick(answer)}
            >
              {answer.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};
