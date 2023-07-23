import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useQueryGetUsersDB = () => {
    return useQuery({
        queryKey: ['userData'],
        queryFn: () =>
            axios.get('http://localhost:3000/users/').then((res) => res.data)
    });
};

export const useMutationCreateUserDB = (queryClient) => {
    return useMutation({
        mutationFn: (data) => {
            return axios.post(`http://localhost:3000/users/`, data);
        },
        onSuccess: () => {
            queryClient.refetchQueries(['userData']);
        }
    });
};

export const useMutationUpdateUserDB = (userID) => {
    return useMutation({
        mutationFn: (data) => {
            return axios.patch(`http://localhost:3000/users/${userID}`, data);
        }
    });
};
