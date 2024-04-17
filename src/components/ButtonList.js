import React from 'react'
import Button from './Button';
const ButtonList = () => {
    const list=["All","Gaming","Entertainmet","News","Music","Dance","Comedy","Drama","Horror","Vlogs","Vlogs"];
  
    return (
      
        <div className='flex h-12'>
         
        {list.map((category)=>(
           <Button key={category.id} name={category} /> 
        ))}
        </div>
      );
  
}

export default ButtonList;