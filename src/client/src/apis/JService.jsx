import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import Utils from '../utils/Utils';

const PROTOCOL = import.meta.env.VITE_PROTOCOL;
const HOSTNAME = import.meta.env.VITE_HOSTNAME;
const PORT = import.meta.env.VITE_JSERVICE_PORT;

const twentyFourHoursInMs = 1000 * 60 * 60 * 24;

const getAllCategoriesCount = async () => {
  const categories = await axios
    .get(`${PROTOCOL}://${HOSTNAME}:${PORT}/categories.json`)
    .then((res) => res.data);
  return categories.length;
};

export const useQueryFinalAnswer = () => {
  return useQuery({
    queryKey: ['finalAnswerData'],
    queryFn: () => axios.get(`${PROTOCOL}://${HOSTNAME}:${PORT}/api/final`).then((res) => res.data),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    gcTime: twentyFourHoursInMs,
  });
};

export const useQueryAnswers = () => {
  return useQuery({
    queryKey: ['mainAnswersData'],
    queryFn: async () => {
      const categoriesCount = await getAllCategoriesCount();
      const categoryRanges = Utils.splitRangeIntoIntervals(1, categoriesCount, 6);

      const endpoints = [];
      categoryRanges.forEach((range) => {
        endpoints.push(
          `${PROTOCOL}://${HOSTNAME}:${PORT}/api/category?id=${Utils.generateRandomNumber(range[0], range[1])}`,
        );
      });

      const requests = endpoints.map((url) => axios.get(url));

      return axios.all(requests).then((response) => response.map((category) => category.data));
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    gcTime: twentyFourHoursInMs,
  });
};
