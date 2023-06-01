import { useState } from "react";
import "./App.css";

// get the input text
// break the string to array
// use for each method to get each word
// then get the first letter by using [i] syntax
// then capitalize it

const App = () => {
  const [inputText, setInputText] = useState("");
  const [output, setOutput] = useState<string>("");

  const capitalizeString = (text: string) => {
    const str: string[] = text.trim().split(" ");
    let capFirstLetters: string[] = [];
    let wordArr: string[] = [];

    str.forEach((word) => {
      capFirstLetters.push(word[0].toUpperCase());

      wordArr.push(word.slice(1));
    });

    const capedString = capFirstLetters
      .map((value, index) => {
        return value + wordArr[index];
      })
      .join(" ");

    setOutput(capedString);
  };

  const handleBtnClick = (inputStr: string) => {
    capitalizeString(inputStr);
  };

  return (
    <div className='container'>
      <div className='question-container'>
        <h1 className='title'>The Capitalizer</h1>
        <div className='input-container'>
          <input
            className='input-text'
            type='text'
            onChange={(e) => setInputText(e.target.value)}
            placeholder='Enter a text here...'
          />
        </div>
      </div>
      <div className='output-container'>
        <h1 className='title'>Output</h1>
        <div className='output'>{output}</div>
      </div>
      <div className='btn-container'>
        <button
          className='btn'
          type='button'
          onClick={() => handleBtnClick(inputText)}
        >
          Capitalize
        </button>
      </div>
    </div>
  );
};

export default App;
