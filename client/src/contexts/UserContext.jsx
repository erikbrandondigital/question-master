import { createContext, useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [userData, setUserData] = useState({});

    const { isLoading, isError, isSuccess, data, error, refetch } = useQuery({
        queryKey: ['userData'],
        queryFn: () =>
            axios.get('http://localhost:3000/users/').then((res) => res.data)
    });

    useEffect(() => {
        if (isSuccess && data.data.length > 0) {
            setUserData(data.data[0]);
        }
    }, [data, isSuccess, setUserData]);

    return (
        <UserContext.Provider
            value={{
                userData,
                setUserData,
                isLoading,
                isError,
                isSuccess,
                error,
                refetch
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

UserContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};
