import React from 'react';

const MemoChild = ({name}) => {
    console.log('Memo child render')
  return (
    <div>
        <p>{name.fname}-{name.lsname}</p>
    </div>
  )
}

export const MemoizedMemoChild = React.memo(MemoChild);


