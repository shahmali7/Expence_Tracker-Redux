import React, { Component } from 'react'
import { connect } from 'react-redux'

import Balance from '../components/balance'
import AddTransactions from '../components/AddTransaction'
import {AddTransaction,deleteTransaction} from '../redux/action'
import TransactionList from '../components/TransactionList'
import IncomeExpence from '../components/incomeExpence'

import '../style/style.css'


export class Main extends Component {
  render() {
      const {transactions,AddTransaction,deleteTransaction}=this.props
    return (
      <div className='main'>
          <Balance transactions={transactions}/>
          <IncomeExpence transactions={transactions}/>
          <TransactionList transactions={transactions}
           deleteTransaction={(id)=>deleteTransaction(id)}/>
          <AddTransactions AddTransaction={(transaction)=> AddTransaction(transaction)}
           id={transactions[0] ? transactions[0].id + 1 : 1 }/>
      </div>
    )
  }
}

const mapStateToProps = (state) =>({
    transactions:state.transactions
})

const mapDispatchToProps =(dispatch)=>({
    AddTransaction :(transaction)=>dispatch(AddTransaction(transaction)),
    deleteTransaction: (id) => dispatch(deleteTransaction(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)