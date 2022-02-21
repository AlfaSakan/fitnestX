import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { memo } from 'react';
import { View } from 'react-native';
import { colors } from '../../../assets/colors';
import ButtonCircle from '../../atoms/Button/ButtonCircle';
import BaseContainerNew from '../../atoms/Container/BaseContainerNew';
import HeaderTitleBackNew from '../../atoms/Header/HeaderTitleBackNew';
import ButtonLargeGradientBottom from '../../molecules/ButtonInBottom/ButtonLargeGradientBottom';

type Params = NativeStackScreenProps<any, any>;
interface Props {
  onPressBack?: () => void;
  children: React.ReactNode;
  title?: string;
  isButtonBottom?: boolean;
  buttonText?: string;
  onPressButton?: () => void;
  isButtonRounded?: boolean;
  icon?: React.ReactNode;
}

const BaseContainerWithHeader: React.FC<Props> = ({
  onPressBack,
  children,
  title,
  isButtonBottom = false,
  buttonText = '',
  onPressButton = () => {},
  isButtonRounded = false,
  icon,
}) => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <HeaderTitleBackNew title={title} onPressBack={onPressBack} />
      <BaseContainerNew>{children}</BaseContainerNew>
      {isButtonBottom && <ButtonLargeGradientBottom text={buttonText} onPress={onPressButton} />}
      {isButtonRounded && <ButtonCircle onPress={onPressButton} icon={icon} />}
    </View>
  );
};

export default memo(BaseContainerWithHeader);
