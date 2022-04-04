import AsyncStorageLib from '@react-native-async-storage/async-storage';
import fetchApi, { fetchApiExercise } from '../../service/fetchApi';

const host = process.env.HOST;
const port = process.env.PORT;

const endPoint = `http://${host}:${port}/api/sessions`;

export const createSession = async (email: string, password: string) => {
  const result = await fetchApi(endPoint, 'POST', { email, password });

  await AsyncStorageLib.setItem('accessToken', result.result.accessToken);
  await AsyncStorageLib.setItem('refreshToken', result.result.refreshToken);

  return result;
};

export const updateSession = async () => {
  return await fetchApi(endPoint, 'PUT');
};

export const deleteSession = async () => {
  const res = await fetchApi(endPoint, 'DELETE');

  await AsyncStorageLib.removeItem('refreshToken');
  await AsyncStorageLib.removeItem('accessToken');

  return res;
};
