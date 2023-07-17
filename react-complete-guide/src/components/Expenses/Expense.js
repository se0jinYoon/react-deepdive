import { useState } from 'react';

import ExpenseItem from "./ExpenseItems";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expense.css"

const Expense = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const yearChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    return ( 
        <div>
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeYear={yearChangeHandler}/>
            <ExpenseItem title={props.data[0].title}
                         date={props.data[0].date}
                         amount={props.data[0].amount} />
            <ExpenseItem title={props.data[1].title}
                         date={props.data[1].date}
                         amount={props.data[1].amount} />
            <ExpenseItem title={props.data[2].title}
                         date={props.data[2].date}
                         amount={props.data[2].amount} />
            <ExpenseItem title={props.data[3].title}
                         date={props.data[3].date}
                         amount={props.data[3].amount} />
        </Card>
        </div>
    )
}

export default Expense;