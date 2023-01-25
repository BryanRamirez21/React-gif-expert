import React from 'react'

export const GitItem = ({title, url}) => {

  return (
    <>
        <div className='card'>
          <img src={url} alt="no hay nada" />
          <p>{title}</p>
        </div>
    </>
  )
}
