import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from './Card';
import ExpensesFilter from './ExpensesFilter';
import './Expense.css';

const Expenses= (props) => {
  const [FilteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }
  const filteredExpense=props.items.filter(expense=>{
    return expense.date.getFullYear().toString() === FilteredYear;
  })
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter 
        selected={FilteredYear} 
        onChangeFilter={filterChangeHandler} 
      />
        {filteredExpense.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />))}
      </Card>
    </div>
  );
}

export default Expenses;