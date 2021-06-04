import React from 'react';
import ExpenseItem from './components/ExpenseItem';
import './App.css';

function App(){
  const expenses = [
    {
      id: 'e1',
      title: 'vegetables',
      amount: 230,
      date: new Date(2021 ,3 ,1)
    },
    {
      id: 'e2',
      title: 'shampoo',
      amount: 240,
      date: new Date(2021, 4, 5)
    },
    {
      id: 'e3',
      title: 'hair oil',
      amount: 290,
      date: new Date(2021, 5 ,1)
    },
    {
      id: 'e1',
      title: 'bottle',
      amount: 220,
      date: new Date(2021, 9, 1)
    }, 
  ]
  return (
      <div>
            <ExpenseItem name={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
            <ExpenseItem name={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
            <ExpenseItem name={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
            <ExpenseItem name={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/>
      
      </div>
  );
}

export default App;
