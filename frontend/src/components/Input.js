import React, { useState } from 'react';

const DefaultInput = ({ type, value, placeholder = 'Input something...' }) => {
  const [stateValue, setValue] = useState('');
  <input
    type={type}
    placeholder={placeholder}
    onInput={($event) => setValue($event.target.value)}
  />
} 