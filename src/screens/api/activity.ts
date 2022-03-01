import fetchApi from '../../service/fetchApi';

const host = process.env.HOST;
const port = process.env.PORT;

const endPoint = `http://${host}:${port}/api/activities`;

export const getActivity = async () => {
  return await fetchApi(endPoint, 'GET');
};

export const postActivity = async (input: object) => {
  return await fetchApi(endPoint, 'POST', input);
};

export const deleteActivity = async (id: string) => {
  return await fetchApi(`${endPoint}/${id}`, 'DELETE');
};
