import React, { useState } from 'react';

function App() {
  const [fullName, setFullName] = useState({
    fName: '',
    lName: '',
    email: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFullName(function (prevValue) {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <div className='container'>
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <p>{fullName.email}</p>
      <form>
        <input
          name='fName'
          placeholder='First Name'
          value={fullName.fName}
          onChange={handleChange}
        />
        <input
          name='lName'
          placeholder='Last Name'
          value={fullName.lName}
          onChange={handleChange}
        />
        <input
          name='email'
          placeholder='Email'
          value={fullName.email}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
