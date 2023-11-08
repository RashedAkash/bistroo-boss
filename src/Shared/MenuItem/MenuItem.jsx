import React from 'react';

const MenuItem = ({ item }) => {
 
  const { name, recipe, price, image } = item;
  return (
    <div className='flex items-center gap-5'>
      <div><img className='w-[150px] rounded-r-[200px] rounded-bl-[200px]'  src={image} alt="" /></div>
      <div>
        <div className='flex items-center justify-between'>
          <h3 className=' text-xl'>{name}  ----------</h3>
          <h4 className=' text-[#BB8506] text-xl'>${price }</h4>
        </div>
        <p className=' text-start'>{recipe}</p>
        
      </div>
    </div>
  );
};

export default MenuItem;