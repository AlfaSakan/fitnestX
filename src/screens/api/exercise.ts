import { fetchApiExercise } from '../../service/fetchApi';

const rapidApiKey = '5075baa51emsh771da1887f58f53p146b02jsn95f2d413e5c3';
const rapidapiHost = 'exercisedb.p.rapidapi.com';

const exercisesEndPoint = 'https://exercisedb.p.rapidapi.com/exercises';
const bodyPartsListEndPoint = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
const listOfTargetMusclesEndPoint = 'https://exercisedb.p.rapidapi.com/exercises/targetList';
const ListOfEquipmentEndPoint = 'https://exercisedb.p.rapidapi.com/exercises/equipmentList';

const bodyPartListEndPoint = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/';
const listByTargetMuscleEndPoint = 'https://exercisedb.p.rapidapi.com/exercises/target/';
const exerciseByIdEndPoint = 'https://exercisedb.p.rapidapi.com/exercises/exercise/';
const listByNameEndPoint = 'https://exercisedb.p.rapidapi.com/exercises/name/';
const listByEquipmentEndPoint = 'https://exercisedb.p.rapidapi.com/exercises/equipment/';

const headers = {
  'x-rapidapi-host': rapidapiHost,
  'x-rapidapi-key': rapidApiKey,
};

export const getAllExercises = async () =>
  await fetchApiExercise(exercisesEndPoint, 'GET', headers);

export const getListOfBodyparts = async () =>
  await fetchApiExercise(bodyPartsListEndPoint, 'GET', headers);

export const getListOfTargetMuscles = async () =>
  await fetchApiExercise(listOfTargetMusclesEndPoint, 'GET', headers);

export const getListOfEquipment = async () =>
  await fetchApiExercise(ListOfEquipmentEndPoint, 'GET', headers);

export const getListByBodypart = async (bodyPart: string) =>
  await fetchApiExercise(`${bodyPartListEndPoint}${bodyPart}`, 'GET', headers);

export const getListById = async (id: number | string) =>
  await fetchApiExercise(`${exerciseByIdEndPoint}${id}`, 'GET', headers);

export const getListByName = async (name: string) =>
  await fetchApiExercise(`${listByNameEndPoint}${name}`, 'GET', headers);

export const getListByTargetMuscle = async (target: string) =>
  await fetchApiExercise(`${listByTargetMuscleEndPoint}${target}`, 'GET', headers);

export const getListByEquipment = async (target: string) =>
  await fetchApiExercise(`${listByEquipmentEndPoint}${target}`, 'GET', headers);
