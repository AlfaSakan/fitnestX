import env from '../../config/env';

import fetchApi from '../../service/fetchApi';
import { UserType } from '../../utils/types';

const endPoint = `http://${env.HOST}:${env.PORT}/api/users`;

export const getUser = async () => await fetchApi(endPoint, 'GET');

export const postUser = async (input: object) => await fetchApi(endPoint, 'POST', input);
