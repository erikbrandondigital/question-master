import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import Utils from '../utils/Utils';

const twentyFourHoursInMs = 1000 * 60 * 60 * 24;

export const useQueryFinalAnswer = () => {
    return useQuery({
        queryKey: ['finalAnswerData'],
        queryFn: () =>
            axios.get('http://jservice.io/api/final').then((res) => res.data),
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        staleTime: twentyFourHoursInMs
    });
};

export const useQueryAnswers = () => {
    return useQuery({
        queryKey: ['mainAnswersData'],
        queryFn: () => {
            const endpoints = [
                `https://jservice.io/api/category?id=${Utils.generateRandomNumber(
                    1,
                    4694
                )}`,
                `https://jservice.io/api/category?id=${Utils.generateRandomNumber(
                    4695,
                    9389
                )}`,
                `https://jservice.io/api/category?id=${Utils.generateRandomNumber(
                    9390,
                    14083
                )}`,
                `https://jservice.io/api/category?id=${Utils.generateRandomNumber(
                    14084,
                    18778
                )}`,
                `https://jservice.io/api/category?id=${Utils.generateRandomNumber(
                    18779,
                    23473
                )}`,
                `https://jservice.io/api/category?id=${Utils.generateRandomNumber(
                    23474,
                    28163
                )}`
            ];

            const requests = endpoints.map((url) => axios.get(url));

            return axios
                .all(requests)
                .then((response) => response.map((category) => category.data));
        },
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        staleTime: twentyFourHoursInMs
    });
};
