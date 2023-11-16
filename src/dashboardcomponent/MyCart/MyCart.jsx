import React from 'react';
import useCarts from '../../Hooks/useCarts';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Swal from 'sweetalert2';
import axios from 'axios';
import { FaTrashAlt } from 'react-icons/fa';



const MyCart = () => {
  const { data , refetch} = useCarts();

  const totalPrice = data.reduce((total, item) => item.price + total, 0);
  
  const handleDelete = (id) => {
   Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
axios.delete(`http://localhost:5000/carts/${id}`)
  .then(function (response) {
    console.log(response.data);
    if (response.data.deletedCount > 0) {
      Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
      });
      refetch()
    }
  })
  .catch(function (error) {
    console.log(error);
  });

    
  }
});
  }
  return (
    <div>
      <SectionTitle heading='WANNA ADD MORE?' subHeading='---My Cart---' />
      <div className='flex gap-6 items-center justify-center'>
        <h2 className=' uppercase text-2xl font-bold'> total orders : {data.length }</h2>
        <h2 className=' uppercase text-2xl font-bold'> total orders : {totalPrice}</h2>
        <button className='btn bg-[#D1A054]'>Pay</button>
      </div>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         #
        </th>
        <th>Item image</th>
        <th>email</th>
        <th>Price</th>
        <th>action</th>
      </tr>
    </thead>
    <tbody>
            {
              data.map((cart,index)=>   <tr key={cart._id}>
        <th>
          {index+1}
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
              <img src={cart.image} alt="" />
              </div>
            </div>
            <div>
                      <div className="font-bold">{ cart.name}</div>
              
            </div>
          </div>
        </td>
        <td>
         {cart.email}
         
        </td>
                <td>{ cart.price}</td>
        <th>
          <button onClick={()=>handleDelete(cart._id)} className=' btn bg-red-600 text-white'><FaTrashAlt/></button>
        </th>
      </tr>)
      }
    
     
    </tbody>
   
    
  </table>
</div>
    </div>
  );
};

export default MyCart;