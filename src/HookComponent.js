import React, { useState, useEffect } from 'react';

function HookComponent(props) {
  const [name, setName] = useState('');
  //keep restricted words in a set for constant lookup time
  const restricted = new Set(['voldemort', 'moriarty', 'maleficent', 'palpatine']);

  useEffect(() => {
    handleTitle();
    handleColor();
  })

  const handleInput = e => {
    setName(e.currentTarget.value);
  }

  const isRestricted = () => {
    if (restricted.has(name.toLocaleLowerCase())) return true;
  }

  const handleTitle = () => {
    if (!name) {
      document.title = 'Name Check';
    } else if (isRestricted()) {
      document.title = '禁止禁止禁止禁止';
    } else {
      document.title = name;
    }
  }

  const handleColor = () => {
    if (isRestricted()) {
      document.getElementsByClassName('form')[0].style.backgroundColor = 'red';
    } else {
      document.getElementsByClassName('form')[0].style.backgroundColor = 'white';
    }
  }

  return (
    <section className='form'>
      <header>Checking: {name}</header>
      <label>Please provide your name
          <input
          value={name}
          onChange={handleInput}
        />
      </label>
    </section>
  )
}

export default HookComponent;