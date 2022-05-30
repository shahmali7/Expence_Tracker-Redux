export const  add_transaction ='add_transaction'
export const delete_transaction ='delete'

export const AddTransaction=(transaction)=>({
    type:add_transaction,
    payload:transaction
})

export const deleteTransaction = (transactionId) => ({
    type: delete_transaction,
    payload: transactionId
})