import React, { useState } from 'react';

function App() {
  const [firstNameValue, setFirstNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');

  const [firstSubmitValue, setFirstSubmitValue] = useState('');
  const [lastSubmitValue, setLastSubmitValue] = useState('');

  function changeHandler(event) {
    setFirstNameValue(event.target.value);
    setLastNameValue(event.target.value);
    console.log(event.target);
  }

  function clickHandler(event) {
    setFirstSubmitValue(firstNameValue);
    setLastSubmitValue(lastNameValue);
    event.preventDefault();
  }

  return (
    <div className='container'>
      <h1>
        Hello {firstSubmitValue} {lastSubmitValue}
      </h1>
      <form>
        <input
          name='fName'
          placeholder='First Name'
          value={fistName}
          onChange={changeHandler}
        />
        <input
          name='lName'
          placeholder='Last Name'
          value={fistName}
          onChange={changeHandler}
        />
        <button onClick={clickHandler}>Submit</button>
      </form>
    </div>
  );
}

export default App;
