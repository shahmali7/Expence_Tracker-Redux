import React from 'react'
import Transaction from './Transaction'

function TransactionList({transactions,deleteTransaction}) {
  return (
    <div className='TransactionList'>
    <h3>TransactionList</h3>
    <ul>
      {transactions.map((transaction)=>{
        return(
          <Transaction key={transaction.id}
           transaction={transaction} 
           deleteTransaction={(id)=>deleteTransaction(id)}/>
        )
      })}
    </ul>
    </div>
  )
}
export default TransactionList