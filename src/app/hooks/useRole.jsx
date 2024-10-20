import { useSession } from 'next-auth/react';

const useRole = () => {
    const user = useSession()
    const role = user?.data?.user?.role
    return role
};

export default useRole;