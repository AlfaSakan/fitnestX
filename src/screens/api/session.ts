import fetchApi from '../../service/fetchApi';

const host = process.env.HOST;
const port = process.env.PORT;

const endPoint = `http://${host}:${port}/api/sessions`;

export const postSession = async () => {
  return await fetchApi(endPoint, 'GET');
};
