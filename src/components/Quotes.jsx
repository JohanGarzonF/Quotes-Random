import React, { useState } from 'react'
import quotes from './json/quotes.json'
import QuotesBox from './QuotesBox'

const colors = [
    '#675C6B',
    '#8411B4',
    '#5038E6',
    '#07617E',
    '#267666',
    '#55E927',
    '#DDB360',
    '#A10111',
    '#AB5360'
  ]

const Quotes = () => {

    const createIndexRandom = array => {
        return Math.floor(Math.random() * array.length);
    }
    
    const [quoteRandom, setQuoteRandom] = useState(quotes[createIndexRandom(quotes)])
    const [colorRandom, setColorRandom] = useState(colors[createIndexRandom(colors)])

    const changeQuoCol= () => {
        setQuoteRandom(quotes[createIndexRandom(quotes)])
        setColorRandom(colors[createIndexRandom(colors)])
    }

  return (
    <div style={{backgroundColor:`${colorRandom}`}} className='quote'>
        <QuotesBox
            quoteRandom={quoteRandom}
            colorRandom={colorRandom}
            changeQuoCol={changeQuoCol}
        />
    </div>
  )
}

export default Quotes