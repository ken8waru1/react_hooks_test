import React, { useState, useEffect } from 'react';

function HookComponent(props) {
  const [name, setName] = useState('');
  const restricted = ['voldemort', 'moriarty', 'maleficent', 'palpatine'];

  return (
    <section className='form'>
      <header>Checking: </header>
      <label>Please provide your name
          <input
          value='something'
          onChange={handleInput}
        />
      </label>
    </section>
  )
}

export default HookComponent;