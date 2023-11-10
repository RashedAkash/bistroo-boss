import React from 'react';
import { useQuery } from 'react-query';
import useAuth from './useAuth';

const useCarts = () => {
  const {user} = useAuth()
  const { isLoading, isError,  data, refetch, error }= useQuery({
  queryKey: ['carts', user?.email],
  queryFn: async () => {
    const response = await fetch(`http://localhost:5000/carts?email=${user.email} `)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json()
  },
})

  return {data,refetch}
};

export default useCarts;