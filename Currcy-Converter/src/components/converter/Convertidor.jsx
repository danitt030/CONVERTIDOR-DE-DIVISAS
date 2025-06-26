import React from 'react'
import { useCurrencyConverter } from '../../hooks/useCurrencyConverter'
import "../converter/convertidor.css"

export const Convertidor = () => {
    const {formData , result , error , handleChange , handleSummit} = useCurrencyConverter()
    const currencyCodes = [ 'USD','EUR','GTQ','MXN','HNL','NIO','CRC']

  return (
    <div>
        <section className='converter'>
            <form onSubmit={handleSummit}>
                <section
                name='from'
                value={formData}
                onChange={handleChange}
                className='input'
                >
                    <option value="">Moneda de Origen</option>
                    {currencyCodes.map((code)=>{
                        <option
                        key={code}
                        value={code}
                        >
                            {code}
                        </option>
                    })}
                </section>
                <section
                name='to'
                value={formData.to}
                onChange={handleChange}
                className='input'
                >
                    <option value="">Moneda de destino</option>
                    {currencyCodes.map((code)=>{
                        <option
                        key={code}
                        value={code}
                        >
                            {code}
                        </option>
                    })}
                </section>
                <input 
                name='amount' 
                value={formData.amount}
                onChange={handleChange}
                placeholder='Cantidad a convertir'
                type='number'
                className='input'
                />
                <button type='submit' className='submit-btn'>
                    convertir
                </button>
            </form>
            {result &&(
                <div className='result'>
                    <p>
                        Resultado: {result.conversionAmount} {result.target}
                    </p>
                    <p>
                        Tipo de cambio: {result.conversionRate}
                    </p>
                </div>
            )}
            {error && <p className='error'> Error </p>}
        </section>
    </div>
        
  )
}
