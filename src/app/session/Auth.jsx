"use client"
import { SessionProvider } from 'next-auth/react';
import React from 'react';

const Auth = ({ children}) => {


    return (
       <SessionProvider>
        {children}
       </SessionProvider>
    );
};

export default Auth;