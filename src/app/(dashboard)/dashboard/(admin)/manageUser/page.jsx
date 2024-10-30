'use client'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import Spinner from './../../../../component/Spinner';
const MangeUser = () => {
  const { refetch,isPending, data,isLoading,isFetching } = useQuery({
    queryKey: ['mangeUser'],

    queryFn: async() =>{
     const res= await axios.get(`uick-bites-tau.vercel.app/api/allUser`)
     return (res?.data)

    }})

  return (

<div className='w-full' >

{

isLoading ?<Spinner></Spinner> :

<div className="antialiased font-sans bg-gray-200 " >

<div class="w-full mx-auto px-4 sm:px-8">
<div class="py-8">
    <div>
        <h2 class="text-2xl font-semibold leading-tight text-center  my-4">Mange User</h2>
    </div>
 
    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto ">
        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table class="min-w-full leading-normal">
                <thead>
                    <tr>
                        <th
                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            User
                        </th>
                        <th
                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Rol
                        </th>
                        <th
                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Email
                        </th>
                        <th
                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>

{

data?.result?.map(mangeUser=><tr key={Math.random()}>
<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
<div class="flex items-center">
    <div class="flex-shrink-0 w-10 h-10">
        <img class="w-full h-full rounded-full"
            src={mangeUser.image}
            alt="image" />
    </div>
    <div class="ml-3">
        <p class="text-gray-900 whitespace-no-wrap">
         {mangeUser.name}
        </p>
    </div>
</div>
</td>
<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
<p class="text-gray-900 whitespace-no-wrap">{mangeUser.role}</p>
</td>
<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
<p class="text-gray-900 whitespace-no-wrap">
   {mangeUser.email}
</p>
</td>
<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
<span
    class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
    <span aria-hidden
        class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
    <span class="relative">pending</span>
</span>
</td>
</tr> )

}

                   
             

                </tbody>
            </table>
           
        </div>
    </div>
</div>
</div>
</div>
}




</div>

  )
}

export default MangeUser