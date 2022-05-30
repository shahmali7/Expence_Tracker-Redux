import React from 'react'

export default function IncomeExpence({transactions}) {
    const amount = transactions.map((transaction)=>Number(transaction.amount))
    const income = amount
    .filter((item) => item > 0)
    .reduce((acc, item) => acc + item, 0);
  const expenses = amount
    .filter((item) => item < 0)
    .reduce((acc, item) => acc + item, 0);
  return (
      <div className='transactions'>
        <div className='income'>
            <h4>Income:</h4>
            <p>+${income}</p>
        </div>
        <div className='expence'>
            <h4>Expence:</h4>
            <p>-${expenses}</p>
        </div>
      </div>
  )
}
