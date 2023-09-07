import { useState } from 'react';

import ExpensesList from './ExpensesList';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from './ExpensesChart';
import Card from "../UI/Card";
import "./Expense.css"

const Expense = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filteredExpenses = props.data.filter(expense => expense.date.getFullYear().toString() === filteredYear);

    const yearChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    return ( 
        <div>
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeYear={yearChangeHandler}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses} />
        </Card>
        </div>
    )
}

export default Expense;