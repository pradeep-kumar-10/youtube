import React from 'react';

const LiveChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center shadow-sm p-2 '>
        <img className='h-8'
            src="https://cdn-icons-png.flaticon.com/512/552/552721.png" 
            alt="user-icon" 
        />
        <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>   
    </div>
  )
}

export default LiveChatMessage;