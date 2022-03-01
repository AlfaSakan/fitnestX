import React from 'react';
import { StyleSheet, View, Modal, TouchableHighlight } from 'react-native';
import { colors } from '../../../assets/colors';
import { responsiveHeight, responsiveWidth } from '../../../utils/functions/responsiveDimension';
import TypographyRegular from '../../atoms/Typography/TypographyRegular';

const PopupOneButton = ({ visible = false, buttonok = () => {}, buttonWidth = 160 }) => {
  return (
    <Modal visible={visible} transparent={true} animationType={'none'}>
      <View style={styles.modalBackground}>
        <View style={styles.backgroudloading}>
          <TypographyRegular />
          <TypographyRegular />
          <View
            style={{
              marginHorizontal: responsiveWidth(20),
              marginTop: responsiveHeight(20),
              justifyContent: 'center',
              alignContent: 'center',
            }}
          >
            <TouchableHighlight
              style={[
                styles.stylbtncancel,
                {
                  width: responsiveWidth(buttonWidth),
                  height: responsiveHeight(50),
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              ]}
              onPress={buttonok}
            >
              <TypographyRegular />
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PopupOneButton;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0, 0.6)',
    paddingHorizontal: responsiveWidth(30),
  },
  backgroudloading: {
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingVertical: responsiveHeight(30),
  },
  imagecontaint: {
    marginTop: responsiveHeight(40),
    height: responsiveHeight(182),
    width: responsiveWidth(280),
    resizeMode: 'contain',
  },
  stylbtncancel: {
    alignItems: 'center',
    height: responsiveHeight(48),
    marginRight: responsiveWidth(8),
    alignContent: 'center',
    borderRadius: 40,
    backgroundColor: 'red',
  },
});
