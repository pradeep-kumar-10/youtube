import React, { useEffect, useState } from 'react';
import LiveChatMessage from './LiveChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomMessage, generateRandomName } from '../utils/helper';

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMesssage, setLiveMessage] = useState("");
  const liveChatMessage = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const time = setInterval(() => {
      //api polling
      console.log("api polling");
      dispatch(addMessage({
        name: generateRandomName(),
        message: generateRandomMessage(20),
      })
      )
    },2000);

    return () => clearInterval(time)
  })

  return (
    <div>
    <div className='rounded-lg p-2 ml-2 border border-black w-full h-[600px] bg-slate-100 overflow-y-scroll flex flex-col-reverse'>
    {
      liveChatMessage.map((c,i) => (
        <LiveChatMessage key={i} 
        name={c.name}
        message= {c.message} 
      />
      )) 
    } 
    </div>
    <form className='w-full border border-black p-2 ml-2' onSubmit={ (e)=> {
      e.preventDefault();
      dispatch( addMessage({
        name: "Pradeep Kumar",
        message: liveMesssage
      }))
      setLiveMessage("");
    }}>
      <input type="text" className='w-96 border-black' value={liveMesssage} onChange={(e) => setLiveMessage(e.target.value)} />
      <button className='px-2 mx-2 bg-green-200'> Send </button>
    </form>
    </div>
  )
}

export default LiveChat;
