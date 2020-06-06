import React from 'react'

export default function CurrencyRow(props) {
    const {
            currencyOptions, 
            selectedCurrency, 
            onChangeCurrency, 
            baseAmount, 
            onChangeAmount
        } = props;
    return (
        <div>
            <input type='number'className='input' value={baseAmount} onChange={onChangeAmount} />
            <select value={selectedCurrency} onChange = {onChangeCurrency} >
                {currencyOptions.map(option => (
                <option key={option} value={option} >{option}</option>
                ))}
                
            </select>
        </div>
    )
}
