import React from 'react';
import { useQuery } from 'react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useCarts = () => {
  const { user } = useAuth()
  const axiosSecure = useAxiosSecure();
  const   {data,refetch}  = useQuery({
  queryKey: ['carts', user?.email],
  queryFn: async () => {
    const response = await axiosSecure.get(`/carts?email=${user?.email}`)
    return response.data;
  },
})

  return {data,refetch}
};

export default useCarts;