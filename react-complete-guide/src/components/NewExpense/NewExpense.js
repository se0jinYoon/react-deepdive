import React from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        // App.js로 데이터 넘기기 (상향)
        props.onAddExpense(expenseData);
    } 
 
    return (
        <div className='new-expense'>
            {/* ExpenseForm.js에서 데이터 받기 위해 prop으로 함수 넘겨주기 */}
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
};

export default NewExpense;