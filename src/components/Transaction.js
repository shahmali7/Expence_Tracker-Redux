import React from 'react'

function Transaction({transaction,deleteTransaction}) {
  let sign = transaction.amount >= 0 ? "+" : "-";
  return (
    <div className='List'>
    <p>{transaction.text}:</p>
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
    <button onClick={() => deleteTransaction(transaction.id)}>X</button>
    </div>
  )
}

export default Transaction