import { useState } from 'react';

const AddNewExpenseBtn = (props) => {
    const checkBtnClicked = () => {
        props.onNewExpenseBtn(true);
    }

    return (
        <div>
            <button onClick={checkBtnClicked}>Add New Expense</button>
        </div>
    )
};

export default AddNewExpenseBtn;