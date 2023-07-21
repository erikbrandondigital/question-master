import { createContext, useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { useQueryGetUsersDB } from '../apis/MongoDB';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [userData, setUserData] = useState({});

    const { isLoading, isError, isSuccess, data, error } = useQueryGetUsersDB();

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
                error
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

UserContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};
