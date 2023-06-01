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
        <button className='btn' type='button'>
          Capitalize
        </button>
      </div>
    </div>
  );
};

export default App;
