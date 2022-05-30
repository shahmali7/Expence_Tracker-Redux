import React from 'react'

export default function Balance({transactions}) {
  const amount = transactions.map((transaction)=>Number(transaction.amount))
  const total =amount.reduce((acc,item)=>(acc+item),0)
  return (
    <div className='balance'>
       <h3>Your Balance:</h3>
       <h1> ${total}</h1>
    </div>
  )
}