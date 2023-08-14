import { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid = enteredEmail.includes('@') && enteredEmail.includes('.')
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  } 

  // name input
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  // email input
  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  }
  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  }

  // form submit!
  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);
    // input에 아무런 값이 입력되지 않은 경우
    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    setEnteredName('');
    setEnteredEmail('');
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
  };

  // invalid한 값일 경우 css class 동적 적용
  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input 
          type="text" 
          id="name" 
          onChange={nameInputChangeHandler} 
          onBlur={nameInputBlurHandler}
          value={enteredName} 
        />
        {/* 유효성 여부에 따라 에러 메시지 띄우기 */}
        {nameInputIsInvalid && <p className="error-text">Name must not be empty</p>}
      </div>
      {/* 이메일 유효성 확인 */}
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input 
          type="email" 
          id="email" 
          onChange={emailInputChangeHandler} 
          onBlur={emailInputBlurHandler}
          value={enteredEmail} 
        />
        {/* 유효성 여부에 따라 에러 메시지 띄우기 */}
        {emailInputIsInvalid && <p className="error-text">Email must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
