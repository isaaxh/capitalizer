import { useState } from "react";
import "./App.css";

const App = () => {
  const [output, setOutput] = useState<string>("");

  return (
    <div className='container'>
      <div className='question-container'>
        <h1 className='title'>Palindrome Checker</h1>
        <div className='input-container'>
          <input
            className='input-text'
            type='text'
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
          Check
        </button>
      </div>
    </div>
  );
};

export default App;
