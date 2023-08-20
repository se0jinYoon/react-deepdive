import {useState} from 'react';

const useBasicInput = (validateValue) => {
    const [value, setValue] = useState('');
    const [valueIsTouched, setValueIsTouched] = useState(false);

    const valueIsValid = validateValue(value);
    const hasError = !valueIsValid && valueIsTouched;

    const onChangeHandler = e => {
        setValue(e.target.value);
    }
    const onBlurHandler = e => {
        setValueIsTouched(true);
    }

    const reset = () => {
        setValue('');
        setValueIsTouched(false);
    }

    return {
        value,
        valueIsValid,
        hasError,
        onChangeHandler,
        onBlurHandler,
        reset
    }
};

export default useBasicInput;