import React, { useState } from 'react';
import styles from './Select.scss';


export default function Select({ name, label, options, handleChange }) {
  const [value, setValue] = useState(options[0]?.value);
  return (
    <div className={styles.Select}>

      <label htmlFor={name}>
        {label}
      </label>

      <select 
        name={name} 
        value={value}
        onChange={({ target }) => {
          const targetValue = target.value;
          setValue(targetValue);
          handleChange(targetValue);
        }}>
        {
          options.map(({ value, text }, i) => (
            <option value={value} key={i}>
              {text}
            </option>
          ))
        }
      </select>
    </div>
  );
}
