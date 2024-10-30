'use client'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const CouponData = () => {
    const { refetch,isPending, data,isLoading,isFetching } = useQuery({
        queryKey: ['couponData'],

        queryFn: async() =>{
         const res= await axios.get(`uick-bites-tau.vercel.app/api/coupon`)
         return (res?.data)

        }})
       

    return [data,refetch,isPending,isLoading,isFetching]
};

export default CouponData;