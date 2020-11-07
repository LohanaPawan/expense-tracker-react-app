import React, {useState, useContext} from 'react'
import {GlobalContext} from '../context/GlobalContext'

function AddTransaction() {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const {addTransaction} = useContext(GlobalContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        const newItem = {
            id: Math.floor(Math.random() * 10000000),
            text,
            amount: parseInt(amount)
        }
        addTransaction(newItem)
    }

    return (
        <>
            <h3> Add new transaction</h3>
            <form onSubmit = {handleSubmit}> 
                <div className="form-control">
                    <label htmlFor="text"> Text </label>
                    <input type="text" id="text" value={text} onChange={val => setText(val.target.value)} />
                </div>
                <div className="form-control">
                <label> Amount <br /> (Negative - expense, positive - income)</label>
                    <input type="number" id="number" value={amount} onChange={val => setAmount(val.target.value)} />
                </div>
                <button className="btn" type="submit">
                        ADD TRANSACTION
                </button>
            </form>
        </>
    )
}

export default AddTransaction
