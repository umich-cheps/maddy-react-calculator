import { useState } from 'react';
import './App.css';

function Operator({ value, onOperatorClick }) {
  return (
      <button className='operator' onClick={onOperatorClick} >
        {value}
      </button>
  );
}

function Equal({ onEqualClick }) {
  return (
      <button className='equal' onClick={onEqualClick} >
        {"="}
      </button>
  );
}

function Number({ value, onNumberClick }) {
  return (
    <button className='button' onClick={onNumberClick} >
      {value}
    </button>
  );
} 

function ButtonContainer({ onButtonClick }) {
  return (
    <div className='button-container'>
      <Operator value={"%"} onOperatorClick={() => onButtonClick("%")} />
      <Operator value={"sqrt"} onOperatorClick={() => onButtonClick("sqrt")} />
      <Operator value={"^2"} onOperatorClick={() => onButtonClick("^2")} />
      <Operator value={"1/x"} onOperatorClick={() => onButtonClick("1/x")} />
      <Operator value={"CE"} onOperatorClick={() => onButtonClick("CE")} />
      <Operator value={"C"} onOperatorClick={() => onButtonClick("C")} />
      <Operator value={"del"} onOperatorClick={() => onButtonClick("del")} />
      <Operator value={"/"} onOperatorClick={() => onButtonClick("/")} />
      <Number value={"7"} onNumberClick={() => onButtonClick("7")} />
      <Number value={"8"} onNumberClick={() => onButtonClick("8")} />
      <Number value={"9"} onNumberClick={() => onButtonClick("9")} />
      <Operator value={"*"} onOperatorClick={() => onButtonClick("*")} />
      <Number value={"4"} onNumberClick={() => onButtonClick("4")} />
      <Number value={"5"} onNumberClick={() => onButtonClick("5")} />
      <Number value={"6"} onNumberClick={() => onButtonClick("6")} />
      <Operator value={"-"} onOperatorClick={() => onButtonClick("-")} />
      <Number value={"1"} onNumberClick={() => onButtonClick("1")} />
      <Number value={"2"} onNumberClick={() => onButtonClick("2")} />
      <Number value={"3"} onNumberClick={() => onButtonClick("3")} />
      <Operator value={"+"} onOperatorClick={() => onButtonClick("+")} />
      <Operator value={"+/-"} onOperatorClick={() => onButtonClick("+/-")} />
      <Number value={"0"} onNumberClick={() => onButtonClick("0")} />
      <Operator value={"."} onOperatorClick={() => onButtonClick(".")} />
      <Equal value={"="} onEqualClick={() => onButtonClick("=")} />
    </ div>
  );
}

function Display({ entry, currentEntry }) {
  return (
    <div >
      <div className='entry-display'>{entry}</div>
      <div className='current-entry-display'>{currentEntry}</div>
    </div>
  );
}

function Calculator() {
  const [entry, setEntry] = useState("");
  const [currentEntry, setCurrentEntry] = useState("");

  function handleClick(c) {
    let newEntry = entry;
    if (entry.includes('=')) newEntry = "";

    switch(c) {
      case '%':
        setCurrentEntry(parseFloat(currentEntry) / 100);
        break;
      case 'sqrt':
        setCurrentEntry(Math.sqrt(parseFloat(currentEntry)));
        break;
      case '^2':
        setCurrentEntry(parseFloat(currentEntry)*(currentEntry));
        break;
      case '1/x':
        setCurrentEntry(1/parseFloat(currentEntry));
        break;
      case 'CE':
        setCurrentEntry("");
        break;
      case 'C':
        setEntry("");
        setCurrentEntry("");
        break;
      case 'del':
        setCurrentEntry(currentEntry.slice(0, -1));
        break;
      case '/':
        setEntry(newEntry + currentEntry + '/');
        setCurrentEntry("");
        break;
      case '*':
        setEntry(newEntry + currentEntry + '*');
        setCurrentEntry("");
        break;
      case '-':
        setEntry(newEntry + currentEntry + '-');
        setCurrentEntry("");
        break;
      case '+':
        setEntry(newEntry + currentEntry + '+');
        setCurrentEntry("");
        break;
      case '+/-':
        setCurrentEntry(parseFloat(currentEntry) * -1);
        break;
      case '.':
        if (!currentEntry.includes('.')) setCurrentEntry(currentEntry + '.')
        break;
      case '=':
        try {
          newEntry += currentEntry;
          setEntry(newEntry + '=');
          setCurrentEntry(eval(newEntry));
        } catch(e) {
          setCurrentEntry("error!");
        }
        break;
      // numbers
      default:
        //setCurrentEntry(parseFloat(currentEntry) * 10 + parseFloat(c));
        setCurrentEntry(currentEntry === '0' ? c: currentEntry + c)
    }
  }

  return (
    <div className='calculator'>
      <div className="header">
        <img
          src="https://cheps.engin.umich.edu/wp-content/uploads/sites/118/2021/06/Center-for-Healthcare-Engineering-Patient-Safety.png"  // Replace with the actual image URL
          alt="University of Michigan Block M"
          className="logo"
        />
      </div>
      <div className='display'>
        <Display entry={entry} currentEntry={currentEntry}/>
      </ div>
        <ButtonContainer onButtonClick={handleClick} />
    </div>
  );
}

export default Calculator;
