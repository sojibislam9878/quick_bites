'use client'

import { useState } from 'react'
import ChatWindow from './ChatWindow'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { SiLivechat } from "react-icons/si";

export default function LiveChat() {
    const [open, setOpen] = useState(false)
    const data = useSession()?.data?.user 
    const route = useRouter()

    const handleLiveChat = () => {

        if (data) {
            setOpen(true)

        }
        else {
            route.push('/login')
        }

    }

    return (
        <>


            {open ? <ChatWindow setOpen={setOpen}></ChatWindow> : <div className="flex fixed z-50 bottom-5 right-5 justify-center items-center">
                <button onClick={handleLiveChat} className="inline-flex items-center text-sm p-2 font-medium leading-5 text-white transition duration-150 ease-in-out   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" >
                    <SiLivechat className='bg-orange-500 m-2 p-2 rounded-md w-full' size={40} />
                </button>

            </div>}


        </>




    )
}
