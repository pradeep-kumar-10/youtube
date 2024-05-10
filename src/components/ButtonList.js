import React from 'react';
import BUTTON from './Button.js';

const ButtonList = () => {
  const List = ["All","Mixes","News","Music","Tamil Cinema","Game","shows","Cooking show","A.R Rahman","Live","Programming"];

  return (
    <div className='flex'>
      {List.map((items, index) => <BUTTON key={index} data={items}/> )}
    </div>
  )
}

export default ButtonList;
