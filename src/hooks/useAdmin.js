import { useEffect, useState } from 'react';

const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(false)
    const [isAdminLoading, setIsAdiminLoading] = useState(true)
     useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.isAdmin) {
                        setIsAdmin(data.isAdmin)
                        setIsAdiminLoading(false)

                    }
                })
        }
    }, [email]);
    return [isAdmin, isAdminLoading];
};

export default useAdmin;