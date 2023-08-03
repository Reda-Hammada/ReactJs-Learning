import React from 'react'

/**
 * React.memo
 * Whne a parent component renders a child component migh un-necessarily render
 * to optimize this, we can pass the component as a props or use the React.memo and pass in the child component
 * this should be used when the props change 
 * 
 */
const ChildOne = () => {

    console.log('React memo child render')
  return (
    <div>
    </div>
  )
}

export const MemoizedChildOne = React.memo(ChildOne);