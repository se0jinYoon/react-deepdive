import React, { useRef, useImperativeHandle } from 'react';

import classes from './Input.module.css';
// ref에 binding될 수 있도록 만들어진 컴포넌트
const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, ()=> {
    return {
        // 외부에서 사용될 이름 : 이 컴포넌트 내부에서 만들어진 메소드
        focus: activate
    };
  });

  return (
    <div className={`${classes.control} ${props.isValid === false ? classes.invalid : ''}`}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
