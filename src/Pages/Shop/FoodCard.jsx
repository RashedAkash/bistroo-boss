import React from 'react';

const FoodCard = ({ item }) => {
  console.log(item);
   const { name, recipe, price, image } = item;
  return (
    <div>
       <div>
      <div className="card h-[400px] bg-[#F3F3F3] shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className=" flex flex-col justify-center items-center space-y-2 text-center">
            <h2 className="card-title mt-2">{name }</h2>
            <p className='text-center '>{ recipe}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-outline btn-secondary border-0 border-b-2">ADD TO Cart</button>
    </div>
  </div>
</div>
      
      
      
    </div>
    </div>
  );
};

export default FoodCard;