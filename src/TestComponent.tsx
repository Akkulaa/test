import React,{memo, useState} from 'react';
import './css/index.css';
import {CountdownComponent} from './CountdownComponent';


const  TestComponent = () => {
  const [randomQuestionNumber, setRandomQuestionNumber] = useState(1);
  const [undoneText, setUndoneText] = useState("");

  function  onDone():void{ 
    setUndoneText('unDone call Succesful!');
  } 

  function changeQuestionNumber(){
    setRandomQuestionNumber(Math.floor(Math.random() * 50));
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
         Countdown Component
        </p>
      </header>
      <div className="App-body">
       <CountdownComponent nb={randomQuestionNumber} onDone={onDone}/>
      <div className="row">
        <button
          data-testid="restartcounter-button"
          className="button"
          onClick={() => changeQuestionNumber()}
        >
          Restart the counter
        </button>
      </div>
       <h5>{undoneText}</h5>
      </div>
     
    </div>
  );
}

export default memo(TestComponent);
