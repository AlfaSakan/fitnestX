import React, { useState } from 'react';
import { FirebaseError } from 'firebase/app';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { images } from '../../assets/images';

import { SignupAndLoginStackType } from '../../utils/types/navigation';
import { ProgramsType } from '../../utils/types/programsType';

import { useAppSelector } from '../../config/redux/app/hooks';
import UserFirebase from '../../config/firebase/userFirebase';

import ChooseYourGoalTemplate from '../../components/templates/ChooseYourGoalTemplate';

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

export default function ChooseYourGoals({ navigation }: ChooseYourGoalsNavigationType) {
  const [activeIndex, setActiveIndex] = useState(0);

  const { login } = useAppSelector((state) => state);
  const { uid } = login;

  const userFirebase = new UserFirebase();

  const navigateNextScreen = async (item: ProgramsType) => {
    const setDatabaseApi = await userFirebase.setDatabase(item.title, uid);

    if (setDatabaseApi instanceof FirebaseError || !setDatabaseApi) {
      return;
    }

    navigation.replace('WelcomingScreen');
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
