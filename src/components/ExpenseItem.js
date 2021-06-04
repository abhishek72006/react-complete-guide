import React from "react";
import "./ExpenseItem.css";
function ExpenseItem() {
  const expneseDate = new Date(2021, 5,  3);
  const expenseItem = "Car Insurance";
  const expenseAmount = 294.67;
  return (
    <div className="expense-item">
      <div>{expneseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseItem}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
