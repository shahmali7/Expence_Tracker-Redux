import React,{useState} from 'react'

function AddTransactions({id,AddTransaction}) {
    const [text,setText] =useState('')
    const [amount,setAmount] =useState()
    const onSubmit=(event)=>{
      event.preventDefault()
      const newTransaction ={
          id:id,
          text: text,
          amount:amount
      }
     AddTransaction(newTransaction)
    }
  return (
    <div className='Add'>
    <h3>AddTransaction</h3>
    <form onSubmit={onSubmit}>
        <div className='Text'>
            <label>Text</label>
            <input value={text} type='text' 
            onChange={(e)=>setText(e.target.value)} 
            placeholder='Enter Text...'/>
        </div>
        <div className='Amount'>
            <label>Amount</label>
            <input value={amount} 
            type='number' 
            onChange={(e)=>setAmount(e.target.value)}
             placeholder='Enter Amount...'/>
        </div>
        <button>Add Transaction</button>
    </form>
    </div>
  )
}

export default AddTransactions