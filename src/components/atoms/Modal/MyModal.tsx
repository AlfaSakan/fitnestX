import React from 'react';
import { StyleSheet, Modal, View } from 'react-native';
import { colors } from '../../../assets/colors';
import { responsiveWidth } from '../../../utils/functions/responsiveDimension';

interface Props {
  visible: boolean;
  dismiss: (value: boolean) => void;
  children: React.ReactNode;
}

const MyModal: React.FC<Props> = ({ visible, dismiss, children }) => {
  const onClose = () => {
    dismiss(false);
  };

  return (
    <Modal visible={visible} transparent={true} animationType={'none'} onRequestClose={onClose}>
      <View style={styles.modalBackground}>
        <View style={styles.childrenContainer}>{children}</View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#00000040',
  },
  childrenContainer: {
    paddingHorizontal: responsiveWidth(30),
    width: '100%',
  },
});

export default MyModal;
