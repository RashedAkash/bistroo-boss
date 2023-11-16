import React from 'react';
import { useQuery } from 'react-query';
import useAxiosSecure from './useAxiosSecure';

const useUsers = () => {
 const axiosSecure = useAxiosSecure();
  const   {data,refetch}  = useQuery({
  queryKey: ['users'],
  queryFn: async () => {
    const response = await axiosSecure.get(`/users`)
    return response.data;
  },
})
  return {data,refetch}
};

export default useUsers;