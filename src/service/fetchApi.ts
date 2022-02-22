import AsyncStorageLib from '@react-native-async-storage/async-storage';

export default async function (endPoint: string, method: string, input?: object) {
  const refreshToken = (await AsyncStorageLib.getItem('refreshToken')) || '';
  const accessToken = (await AsyncStorageLib.getItem('accessToken')) || '';

  const res = await fetch(endPoint, {
    method: method,
    headers: {
      'content-type': 'application/json',
      'x-refresh': refreshToken,
      authorization: accessToken,
    },
    body: JSON.stringify(input),
  });

  const data = await res.json();

  return { result: data, status: res.status };
}
