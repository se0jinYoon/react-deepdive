import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangedHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsvalid,
    hasError: emailInputHasError,
    valueChangedHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes('@') && value.includes('.'));

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsvalid) {
    formIsValid = true;
  }

  // form submit!
  const formSubmissionHandler = (event) => {
    event.preventDefault();

    // input에 아무런 값이 입력되지 않은 경우
    if (!enteredNameIsValid || !enteredEmailIsvalid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
  };

  // invalid한 값일 경우 css class 동적 적용
  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" onChange={nameChangedHandler} onBlur={nameBlurHandler} value={enteredName} />
        {/* 유효성 여부에 따라 에러 메시지 띄우기 */}
        {nameInputHasError && <p className="error-text">Name must not be empty</p>}
      </div>
      {/* 이메일 유효성 확인 */}
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" onChange={emailChangeHandler} onBlur={emailBlurHandler} value={enteredEmail} />
        {/* 유효성 여부에 따라 에러 메시지 띄우기 */}
        {emailInputHasError && <p className="error-text">Email must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
