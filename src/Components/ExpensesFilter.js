import React from 'react'
import './Filter.css';

export default function ExpensesFilter (props) {
  
  const FilterHandler=(event)=>{
    props.onChangeFilter(event.target.value)
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={FilterHandler}>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  )
}