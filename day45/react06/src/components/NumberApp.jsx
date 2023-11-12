import { useState,useEffect, useRef } from "react"

export default function NumberApp() {
  const inputRef = useRef();
  const [count, setCount] = useState(7);
  const [inputValue, setInputValue] = useState("");
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [errorMessage, setErrorMessage] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [attempts, setAttempts] = useState([]);

  function generateRandomNumber() {
    const min = 1;
    const max = 99;
    return Math.floor(min + Math.random() * (max - min + 1));
  }

  const findValue = (e) => {
    e.preventDefault();
    const valueNum = inputValue.replace(/[^0-9]/g, "");
    console.log("Sanitized Value:", valueNum);
    console.log(randomNumber);

    let result = "";

    if (inputValue < randomNumber) {
      result = "Vui lòng nhập lớn hơn";
      setErrorMessage(result);
    } else if (inputValue > randomNumber) {
      result = "Vui lòng nhập số nhỏ hơn";
      setErrorMessage(result);
    } else if (inputValue == randomNumber) {
      result = "You win";
      setErrorMessage(result);
      setGameOver(true);
    }

    setAttempts((prevAttempts) => [
      ...prevAttempts,
      { value: inputValue, result: result },
    ]);
    setInputValue("");
    setCount(count - 1);

    if (count == 1 && inputValue !== randomNumber) {
      result = "You lose";
      setErrorMessage(result);
      handlePlayAgain(result);
    }
  };

  const handlePlayAgain = (result) => {
    setCount(7);
    setRandomNumber(generateRandomNumber());
    setGameOver(true);
    setAttempts((prevAttempts) => [
      ...prevAttempts,
      { value: inputValue, result: result },
    ]);
    inputRef.current.focus();
  };

  const handleChange = (e) => {
    const numValue = e.target.value.replace(/[^0-9]/g, "");
    setInputValue(numValue);
  };

  useEffect(() => {
    if (count === 0) {
      setGameOver(true);
    } else {
      inputRef.current.focus();
    }
  }, [count]);

  return (
    <div className="container">
      <h1>Chào mừng bạn đến với trò chơi đoán số!</h1>
      <p> Còn {count} / 7 lần</p>
      <p>Bạn cần tìm kiếm một số từ 1 đến 99</p>
      <div className="type">
        <form onSubmit={findValue}>
          <p>Hãy thử nhập 1 số</p>
          <input
            ref={inputRef}
            type="text"
            placeholder="Thử một số"
            value={inputValue}
            onChange={handleChange}
          />
        </form>
        {errorMessage && <p style={{ color: "#319795" }}>{errorMessage}</p>}
        {gameOver && (
          <div>
            <p>Your attempts:</p>
            <ul>
              {attempts.map((attempt, index) => (
                <li key={index}>
                  Value: {attempt.value},   Lần nhập : {index + 1}
                </li>
              ))}
            </ul>
            <button onClick={() => handlePlayAgain("New Game")}>
              Play Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}