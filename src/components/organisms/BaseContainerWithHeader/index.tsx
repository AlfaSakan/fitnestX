import React, { memo } from 'react';
import { View } from 'react-native';
import { colors } from '../../../assets/colors';
import BaseContainerNew from '../../atoms/Container/BaseContainerNew';
import HeaderTitleBackNew from '../../atoms/Header/HeaderTitleBackNew';
import ButtonLargeGradientBottom from '../../molecules/ButtonInBottom/ButtonLargeGradientBottom';

interface Props {
  onPressBack?: () => void;
  children: React.ReactNode;
  title?: string;
  isButtonBottom?: boolean;
  buttonText?: string;
  onPressButton: () => void;
}

const BaseContainerWithHeader: React.FC<Props> = ({
  onPressBack,
  children,
  title,
  isButtonBottom = false,
  buttonText = '',
  onPressButton,
}) => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <HeaderTitleBackNew title={title} onPressBack={onPressBack} />
      <BaseContainerNew>{children}</BaseContainerNew>
      {isButtonBottom && <ButtonLargeGradientBottom text={buttonText} onPress={onPressButton} />}
    </View>
  );
};

export default memo(BaseContainerWithHeader);
