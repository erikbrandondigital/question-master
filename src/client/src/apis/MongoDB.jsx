import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';

const PROTOCOL = import.meta.env.VITE_PROTOCOL;
const HOSTNAME = import.meta.env.VITE_HOSTNAME;
const PORT = import.meta.env.VITE_SERVER_PORT;

export const useQueryGetUsersDB = () => {
  return useQuery({
    queryKey: ['userData'],
    queryFn: () =>
      axios
        .get(`${PROTOCOL}://${HOSTNAME}:${PORT}/users/`)
        .then((res) => res.data),
  });
};

export const useMutationCreateUserDB = (queryClient) => {
  return useMutation({
    mutationFn: (data) => {
      return axios.post(`${PROTOCOL}://${HOSTNAME}:${PORT}/users/`, data);
    },
    onSuccess: () => {
      queryClient.refetchQueries(['userData']);
    },
  });
};

export const useMutationUpdateUserDB = (userID) => {
  return useMutation({
    mutationFn: (data) => {
      return axios.patch(
        `${PROTOCOL}://${HOSTNAME}:${PORT}/users/${userID}`,
        data,
      );
    },
  });
};
