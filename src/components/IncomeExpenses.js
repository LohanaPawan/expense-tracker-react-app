import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'



function IncomeExpenses() {
    const { transactions } = useContext(GlobalContext)

    const amount = transactions.map(item => item.amount)

    const expense = (amount
        .filter(item => item < 0)
        .reduce((acc, num) => (acc += num), 0) * -1
    ).toFixed(2)

    const income = amount
        .filter(item => item > 0)
        .reduce((acc, num) => (acc += num), 0)
        .toFixed(2)
    return (
        <div className="inc-exp-container">
            <div >
                <h4> Income </h4>
                <p className="money plus" > ${income}</p>
            </div>
            <div>
                <h4> Expense </h4>
                <p className="money minus" > ${expense} </p>
            </div>
        </div>
    )
}

export default IncomeExpenses
