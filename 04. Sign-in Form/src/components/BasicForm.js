import { useState } from 'react';
import useBasicInput from '../hooks/use-basicInput';

const BasicForm = (props) => {
  // invalid한 값 && touch 됨 => 빨간 input 적용
  // valid한 값 && touch 됨 => submit 시 초기화

  const {
    value: firstName,
    valueIsValid: firstNameValueIsValid,
    hasError: firstNameIsInvalid,
    onChangeHandler: firstNameChangeHandler,
    onBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useBasicInput((value) => value.trim() !== '');

  const {
    value: lastName,
    valueIsValid: lastNameValueIsValid,
    hasError: lastNameIsInvalid,
    onChangeHandler: lastNameChangeHandler,
    onBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useBasicInput((value) => value.trim() !== '');

  const {
    value: email,
    valueIsValid: emailValueIsValid,
    hasError: emailIsInvalid,
    onChangeHandler: emailChangeHandler,
    onBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useBasicInput((value) => value.includes('@') && value.includes('.'));

  let formIsValid = false;
  if (firstNameValueIsValid && lastNameValueIsValid && emailValueIsValid) {
    formIsValid = true;
  }

  // submit handler
  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(firstName, lastName, email);
    
    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  let firstNameClasses = firstNameIsInvalid ? 'form-control invalid' : 'form-control';
  let lastNameClasses = lastNameIsInvalid ? 'form-control invalid' : 'form-control';
  let emailClasses = emailIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={firstName}
          />
          {firstNameIsInvalid && <p className="error-text">first Name을 입력하세요</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={lastName}
          />
          {lastNameIsInvalid && <p className="error-text">last Name을 입력하세요</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input 
          type="email" 
          id="email" 
          onChange={emailChangeHandler} 
          onBlur={emailBlurHandler} 
          value={email} 
        />
        {emailIsInvalid && <p className="error-text">email을 입력하세요</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
