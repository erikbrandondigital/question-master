import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import { useQueryGetUsersDB } from '../apis/MongoDB';
import { UserContext } from './UserContext';

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
        error,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
