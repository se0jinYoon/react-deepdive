import { useState } from 'react';

const BasicForm = (props) => {
  // invalid한 값 && touch 됨 => 빨간 input 적용
  // valid한 값 && touch 됨 => submit 시 초기화

  const [firstName, setFirstName] = useState('');
  const [firstNameIsTouched, setFirstNameIsTouched] = useState(false);

  const [lastName, setLastName] = useState('');
  const [lastNameIsTouched, setLastNameIsTouched] = useState(false);

  const [email, setEmail] = useState('');
  const [emailIsTouched, setEmailIsTouched] = useState(false);
  
  const firstNameValueIsValid = firstName.trim() !== '';
  const lastNameValueIsValid = lastName.trim() !== '';
  const emailValueIsValid = email.includes('@') && email.includes('.');

  let formIsValid = false;
  if (firstNameValueIsValid && lastNameValueIsValid && emailValueIsValid) {
    formIsValid = true;
  }

  // change handler
  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
  }
  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value);
  }
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  }

  // blur handler
  const firstNameBlurHandler = (event) => {
    setFirstNameIsTouched(true);
  }
  const lastNameBlurHandler = (event) => {
    setLastNameIsTouched(true);
  }
  const emailBlurHandler = (event) => {
    setEmailIsTouched(true);
  }

  // submit handler
  const onSubmitHandler = (event) =>{
    event.preventDefault();
    setFirstNameIsTouched(true);
    setLastNameIsTouched(true);
    setEmailIsTouched(true);

    if (!firstNameValueIsValid || !lastNameValueIsValid || !emailValueIsValid){
      return;
    }

    setFirstName('');
    setLastName('');
    setEmail('');
    setFirstNameIsTouched(false);
    setLastNameIsTouched(false);
    setEmailIsTouched(false);
  }

  let firstNameIsInvalid = !firstNameValueIsValid && firstNameIsTouched;
  let lastNameIsInvalid = !lastNameValueIsValid && lastNameIsTouched;
  let emailIsInvalid = !emailValueIsValid && emailIsTouched;

  let firstNameClasses = firstNameIsInvalid ? 'form-control invalid' : 'form-control'
  let lastNameClasses = lastNameIsInvalid ? 'form-control invalid' : 'form-control'
  let emailClasses = emailIsInvalid ? 'form-control invalid' : 'form-control'


  return (
    <form onSubmit={onSubmitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='firstName'>First Name</label>
          <input type='text' id='firstName' onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler} value={firstName}/>
          {firstNameIsInvalid && <p className="error-text">first Name을 입력하세요</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='lastName'>Last Name</label>
          <input type='text' id='lastName' onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} value={lastName}/>
          {lastNameIsInvalid && <p className="error-text">last Name을 입력하세요</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input type='email' id='email' onChange={emailChangeHandler} onBlur={emailBlurHandler} value={email}/>
        {emailIsInvalid && <p className="error-text">email을 입력하세요</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
