import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { images } from '../../assets/images';

import { SignupAndLoginStackType } from '../../utils/types/navigation';
import { ProgramsType } from '../../utils/types/programsType';

import { useAppSelector, useAppDispatch } from '../../config/redux/app/hooks';

import ChooseYourGoalTemplate from '../../components/templates/ChooseYourGoalTemplate';
import { postUser } from '../api/user';
import { toastError } from '../../utils/types/toastError';
import { createSession } from '../api/session';
import { setGoal } from '../../config/redux/features/user/userInformation';
import AsyncStorageLib from '@react-native-async-storage/async-storage';

const programs: ProgramsType[] = [
  {
    id: 0,
    title: 'Improve Shape',
    message: 'I have a low amount of body fat and need / want to build more muscle',
    image: images.program1,
  },
  {
    id: 1,
    title: 'Lean and Tone',
    message:
      'I’m “skinny fat”. look thin but have no shape. I want to add learn muscle in the right way',
    image: images.program2,
  },
  {
    id: 2,
    title: 'Lose a Fat',
    message: 'I have over 20 lbs to lose. I want to drop all this fat and gain muscle mass',
    image: images.program3,
  },
];

type ChooseYourGoalsNavigationType = NativeStackScreenProps<
  SignupAndLoginStackType,
  'ChooseYourGoals'
>;

export default function ChooseYourGoals({ navigation, route }: ChooseYourGoalsNavigationType) {
  const [activeIndex, setActiveIndex] = useState(0);

  const { password } = route.params;

  const { login, user } = useAppSelector((state) => state);
  const { uid } = login;

  const dispatch = useAppDispatch();

  const navigateNextScreen = async (item: ProgramsType) => {
    try {
      dispatch(setGoal(item.title));

      const result = await postUser({
        ...user,
        goal: item.title,
        password: password,
        passwordConfirmation: password,
      });

      if (result.status !== 200) throw result;

      const resSession = await createSession(user.email ?? '', password);

      if (resSession.status !== 200) throw resSession;

      navigation.replace('WelcomingScreen');
    } catch (error) {
      toastError(error);
    }
  };

  return (
    <ChooseYourGoalTemplate
      activeIndex={activeIndex}
      onPressButton={navigateNextScreen}
      values={programs}
      setActiveIndex={setActiveIndex}
    />
  );
}
