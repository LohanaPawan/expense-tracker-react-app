import React, {useState} from 'react'

function AddTransaction() {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)
    return (
        <>
            <h3> Add new transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text"> Text </label>
                    <input type="text" id="text" value={text} onChange={val => setText(val.target.value)} />
                </div>
                <div className="form-control">
                <label> Amount <br /> (Negative - expense, positive - income)</label>
                    <input type="number" id="number" value={amount} onChange={val => setAmount(val.target.val)} />
                </div>
            </form>
        </>
    )
}

export default AddTransaction
