import { ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { memo } from 'react';
import { ColorSchemeName, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../../assets/colors';
import ButtonCircle from '../../atoms/Button/ButtonCircle';
import BaseContainerNew from '../../atoms/Container/BaseContainerNew';
import BaseContainerNewGradient from '../../atoms/Container/BaseContainerNewGradient';
import HeaderTitleBackNew from '../../atoms/Header/HeaderTitleBackNew';
import ButtonLargeGradientBottom from '../../molecules/ButtonInBottom/ButtonLargeGradientBottom';

interface Props {
  onPressBack?: () => void;
  children: React.ReactNode;
  title?: string;
  isButtonBottom?: boolean;
  buttonText?: string;
  onPressButton?: () => void;
  isButtonRounded?: boolean;
  icon?: React.ReactNode;
  navigation?: NativeStackNavigationProp<ParamListBase, string>;
  colorGradient?: (string | number)[];
}

const BaseContainerGradient: React.FC<Props> = ({
  onPressBack,
  children,
  title,
  isButtonBottom = false,
  buttonText = '',
  onPressButton = () => {},
  isButtonRounded = false,
  icon,
  navigation,
  colorGradient = colors.blueLinear,
}) => {
  const goBack = () => {
    navigation?.goBack();
  };

  return (
    <LinearGradient
      colors={colorGradient}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
        <HeaderTitleBackNew title={title} onPressBack={onPressBack ?? goBack} />
        <BaseContainerNewGradient>{children}</BaseContainerNewGradient>
        {isButtonBottom && <ButtonLargeGradientBottom text={buttonText} onPress={onPressButton} />}
        {isButtonRounded && <ButtonCircle onPress={onPressButton} icon={icon} />}
    </LinearGradient>
  );
};

export default memo(BaseContainerGradient);
