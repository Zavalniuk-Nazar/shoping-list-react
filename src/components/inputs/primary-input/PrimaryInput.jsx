import classNames from 'classnames';
import React, {useContext} from 'react';
import './PrimaryInput.css';
import {ContextApp} from '../../../context/ContextApp';

function PrimaryInput(props) {
  const {theme} = useContext(ContextApp);
  const classNameInput = classNames(props.className);
  const placeholderText = classNames(props.placeholderText);

  return (
    <div className='input-body'>
      <input
        type='text'
        className={`${classNameInput} ${theme}`}
        onChange={props.onHandleChange}
        required
      />
      <div className={`placeholder ${theme}`}>{placeholderText}</div>
    </div>
  );
}

export default PrimaryInput;
