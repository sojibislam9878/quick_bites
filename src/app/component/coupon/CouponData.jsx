'use client'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const CouponData = () => {
    const { refetch, data } = useQuery({
        queryKey: ['couponData'],

        queryFn: async() =>{
         const res= await axios.get(`http://localhost:3000/api/coupon`)
         return (res?.data)

        }})
       

    return [data,refetch]
};

export default CouponData;