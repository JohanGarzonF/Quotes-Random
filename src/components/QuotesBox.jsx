import React from 'react'

const QuotesBox = ({quoteRandom, colorRandom,changeQuoCol}) => {
  return (
    <div style={{color: `${colorRandom}`}} className='quote-box'>
        <p>{quoteRandom.quote}</p><hr/>
        <div className="author">
            <blockquote><i>{quoteRandom.author}</i></blockquote>
            <button onClick={changeQuoCol} style={{backgroundColor: `${colorRandom}`}}><i class="fa-solid fa-arrow-right"></i></button>
        </div>
    </div>
  )
}

export default QuotesBox