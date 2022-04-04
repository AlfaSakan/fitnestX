import { fetchApiExercise } from '../../service/fetchApi';

const endpoint = {
  day: 'https://wger.de/api/v2/day/',
  set: 'https://wger.de/api/v2/set/',
  setting: 'https://wger.de/api/v2/setting/',
  workout: 'https://wger.de/api/v2/workout/',
  templates: 'https://wger.de/api/v2/templates/',
  'public-templates': 'https://wger.de/api/v2/public-templates/',
  workoutsession: 'https://wger.de/api/v2/workoutsession/',
  workoutlog: 'https://wger.de/api/v2/workoutlog/',
  schedulestep: 'https://wger.de/api/v2/schedulestep/',
  schedule: 'https://wger.de/api/v2/schedule/',
  daysofweek: 'https://wger.de/api/v2/daysofweek/',
  language: 'https://wger.de/api/v2/language/',
  license: 'https://wger.de/api/v2/license/',
  userprofile: 'https://wger.de/api/v2/userprofile/',
  'setting-repetitionunit': 'https://wger.de/api/v2/setting-repetitionunit/',
  'setting-weightunit': 'https://wger.de/api/v2/setting-weightunit/',
  exerciseinfo: 'https://wger.de/api/v2/exerciseinfo/',
  exercisebaseinfo: 'https://wger.de/api/v2/exercisebaseinfo/',
  exercise: 'https://wger.de/api/v2/exercise/?language=2',
  equipment: 'https://wger.de/api/v2/equipment/',
  exercisecategory: 'https://wger.de/api/v2/exercisecategory/',
  exerciseimage: 'https://wger.de/api/v2/exerciseimage/',
  video: 'https://wger.de/api/v2/video/',
  exercisecomment: 'https://wger.de/api/v2/exercisecomment/',
  muscle: 'https://wger.de/api/v2/muscle/',
  ingredient: 'https://wger.de/api/v2/ingredient/',
  ingredientinfo: 'https://wger.de/api/v2/ingredientinfo/',
  weightunit: 'https://wger.de/api/v2/weightunit/',
  ingredientweightunit: 'https://wger.de/api/v2/ingredientweightunit/',
  nutritionplan: 'https://wger.de/api/v2/nutritionplan/',
  nutritionplaninfo: 'https://wger.de/api/v2/nutritionplaninfo/',
  nutritiondiary: 'https://wger.de/api/v2/nutritiondiary/',
  meal: 'https://wger.de/api/v2/meal/',
  mealitem: 'https://wger.de/api/v2/mealitem/',
  weightentry: 'https://wger.de/api/v2/weightentry/',
  gallery: 'https://wger.de/api/v2/gallery/',
  measurement: 'https://wger.de/api/v2/measurement/',
  'measurement-category': 'https://wger.de/api/v2/measurement-category/',
};

export const getAllExercises = async () => {
  return await fetchApiExercise(endpoint.exercise, 'GET');
};

export const getExerciseByCategory = async (category: number | string, limit?: number) => {
  return await fetchApiExercise(
    `${endpoint.exercise}&category=${category}&limit=${limit ?? 10}`,
    'GET'
  );
};

export const getImageApi = async (base: number) => {
  const res = await fetchApiExercise(`${endpoint.exerciseimage}?exercise_base=${base}`, 'GET');

  return res.results;
};
