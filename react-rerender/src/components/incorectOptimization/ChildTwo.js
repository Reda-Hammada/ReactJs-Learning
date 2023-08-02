import React from 'react'
import { MemoizedChildOne } from '../optimization/ReactMemo/ChildOne'

const ChildTwo = ({name,children}) => {
    console.log('child two rerender')

  return (
    <div>
      {children}-{name}
    </div>
  )
}

export const MemoizedChildTwo = React.memo(ChildTwo)