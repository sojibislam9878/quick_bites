'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import ChatWindow from './ChatWindow'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { SiLivechat } from "react-icons/si";

export default function LiveChat() {
    const [open, setOpen] = useState(false)
    const data = useSession()?.data?.user //for user data from when user is logged in
    const route = useRouter()

    const handleLiveChat = () => {
        // console.log(data)

        if (data) {
            setOpen(true)

        }
        else {
            route.push('/login')
        }

    }

    return (
        <>


            {open ? <ChatWindow setOpen={setOpen}></ChatWindow> : <div className="flex fixed z-50 top-3/4 right-5 justify-center items-center">
                <button onClick={handleLiveChat} className="inline-flex items-center text-sm p-2 font-medium leading-5 text-white transition duration-150 ease-in-out   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" >
                    <SiLivechat className='bg-orange-500 m-2 p-2 rounded-md w-full' size={40} />
                </button>

            </div>}


        </>




    )
}
