import React from 'react'

const CallBackChild = ({handleClick}) => {


    console.log('chil callback render')

  return (
    <div>

        <button onClick={handleClick}>change-count</button>
    </div>
  )
}

export const  MemoizedCallBackChild = CallBackChild;