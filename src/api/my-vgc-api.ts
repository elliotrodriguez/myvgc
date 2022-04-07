import axios from 'axios';
import {RAWG_API_BASE_URL, RAWG_API_KEY} from '@env';

const buildAuthorizedApi = async (
  urlPath: string,
  params: string | undefined,
) => {
  const axiosInstance = axios.create({
    baseURL: `${RAWG_API_BASE_URL}/${urlPath}?key=${RAWG_API_KEY}${
      params || ''
    }`,
  });

  return axiosInstance;
};
export const getApiInstance = async (urlPath: string, params: string) => {
  return buildAuthorizedApi(urlPath, params);
};
