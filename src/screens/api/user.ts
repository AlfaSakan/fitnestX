import env from '../../config/env';

import fetchApi from '../../service/fetchApi';

const endPoint = `http://${env.HOST}:${env.PORT}/api/users`;

export const getUser = async () => {
  try {
    const result = await fetchApi(endPoint, 'GET');

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const postUser = async (input: object) => {
  try {
    const result = await fetchApi(endPoint, 'POST', input);

    return result;
  } catch (error) {
    console.log(error);
  }
};
