'use client';
import React from 'react';
import AdminProfile from './(admin)/adminProfile/page';
import DeleveryProfile from './(deleveryMan)/deleveryProfile/page';
import OwnerProfile from './(owner)/ownerProfile/page';
import UserProfile from './(user)/userProfile/page';
import { useSession } from 'next-auth/react';
import useRole from '@/app/hooks/useRole';
import Spinner from '@/app/component/Spinner';

const DashboardPage = () => {
  const { data: session, status } = useSession(); // Get session and status
  const role = useRole();

  // Handle loading state while session is being fetched
  if (status === 'loading') {
    return <Spinner/>; 
  }

  
  if (!session) {
    return <div>No session available</div>; // Or handle redirection
  }

  return (
    <div>
      {/* Render components based on the role */}
      {role === 'usr' && <UserProfile />}
      {role === 'user' && <AdminProfile />}
      {role === 'deleveryMan' && <DeleveryProfile />}
      {role === 'owner' && <OwnerProfile />}
    </div>
  );
};

export default DashboardPage;
