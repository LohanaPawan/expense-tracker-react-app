import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalContext'

export const TransactionList = () => {
    const {transactions} = useContext(GlobalContext)
    return (
        <>
            <h3> History </h3>
            <ul className="list">
                {
                    transactions.map(item => {
                        const sign = item.amount > 0 ? '+' : '-'
                        return(
                            <li className={item.amount > 0 ? 'plus' : 'minus'} key={item.id}>
                            {item.text} <span>{sign}${Math.abs(item.amount)} </span> <button className="delete-btn">x</button>
                            </li>
                        )
                   })
                }
            
            </ul>
        </>
    )
}
