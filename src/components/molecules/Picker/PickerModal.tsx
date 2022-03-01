import React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { responsiveHeight, responsiveWidth } from '../../../utils/functions/responsiveDimension';
import Margin from '../../atoms/Margin/Margin';
import Modal from '../../atoms/Modal/MyModal';
import TypographyRegular from '../../atoms/Typography/TypographyRegular';

const PickerModal = ({
  visible,
  dismiss,
  children,
}: {
  children: React.ReactNode;
  visible: boolean;
  dismiss: (value: boolean) => void;
}) => {
  return (
    <Modal visible={visible} dismiss={dismiss}>
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 10,
          maxHeight: 400,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              paddingVertical: responsiveHeight(30),
              paddingHorizontal: responsiveWidth(20),
            }}
          >
            {children}
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default PickerModal;
