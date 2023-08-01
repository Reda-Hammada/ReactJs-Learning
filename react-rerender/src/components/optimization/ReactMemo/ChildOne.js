import React from 'react'

/**
 * React.memo
 * Whne a parent component renders a child component migh un-necessarily render
 * to optimize his, we can pass the component as a props or use the React.memo and pass in the child component
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