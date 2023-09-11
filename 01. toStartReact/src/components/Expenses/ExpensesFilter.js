import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

    const yearChangeHandler = (event) => {
        // Expens.js로 사용자가 선택한 년도 전달
        props.onChangeYear(event.target.value);
    }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={yearChangeHandler}>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;