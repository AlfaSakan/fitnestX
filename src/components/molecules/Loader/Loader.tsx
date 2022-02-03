import React, { memo } from 'react';
import { StyleSheet, View, Modal, Image, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';
import { images } from '../../../assets/images';
import { responsiveWidth } from '../../../utils/functions/responsiveDimension';

const { width, height } = Dimensions.get('window');

const Loader = function Loader({ loading }: { loading: boolean }) {
  return (
    <Modal visible={loading} transparent={true} animationType={'none'}>
      <View style={styles.modalBackground}>
        <View style={styles.backgroudloading}>
          <LottieView source={images.loadingAnimation} autoPlay loop />
        </View>
      </View>
    </Modal>
  );
};

export default memo(Loader);

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040',
    height: height,
    width: width,
  },
  backgroudloading: {
    backgroundColor: '#ffffff',
    width: responsiveWidth(75),
    height: responsiveWidth(75),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ffffff',
  },
});
