import React, { useState } from 'react';
import useUsers from '../../Hooks/useUsers';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from 'react-query';

const AllUsers = () => {
  // const { data, refetch } = useUsers();
  // console.log(data);
  const axiosSecure = useAxiosSecure()
  const {  data,refetch } = useQuery({
    queryKey: ['users'],
     queryFn: async () => {
    const res = await axiosSecure.get('/users')
    return res.data
  },
  })
  console.log(data);
  
  const handleDelete = (user) => {
    console.log(user._id);
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
axiosSecure.delete(`/users/${user._id}`)
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


      <div>
      <h1 className=' font-bold text-3xl'>ALL Users {data?.length}</h1>
      <div className='py-10'>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
              {
                data?.map((user,index)=><tr key={index}>
                  <th>{index+1 }</th>
                  <td>{ user.name}</td>
                  <td>{ user.email}</td>
                  <td ><button className=' btn bg-yellow-500'><FaEdit /></button></td>
                  <td >
                    <button onClick={()=>handleDelete(user)} className=' btn bg-red-700 text-white'><FaTrashAlt /></button>
                  </td>

                  
      </tr> )
      }
      
      
    </tbody>
  </table>
</div>
      </div>
      </div>
      

      
    </div>
  );
};

export default AllUsers;