import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../assets/colors';
import { images } from '../../assets/images';
import HeaderTitleBack from '../../components/Header/HeaderTitleBack';
import LineSeparator from '../../components/LineSeparator';
import Margin from '../../components/Margin';
import NotificationCard from '../../components/NotificationInformation/NotificationCard';
import { MainStackNavigation } from '../../types/navigation';
import { responsiveHeight, responsiveWidth } from '../../utils/responsiveDimension';

type NotificationNavigationType = NativeStackScreenProps<MainStackNavigation, 'NotificationScreen'>;

export default function NotificationScreen({ navigation }: NotificationNavigationType) {
  return (
    <View style={styles.container}>
      <HeaderTitleBack onPressBack={() => navigation.goBack()} />
      <View style={{ paddingHorizontal: responsiveWidth(30) }}>
        <Margin margin={30} />
        <NotificationCard
          colorImage={colors.blue}
          image={images.pieImage}
          text="Hey, it's time for lunch"
          description="About 1 minutes ago"
        />
        <Margin margin={15} />
        <LineSeparator color={colors.gray3} />
        <Margin margin={15} />
        <NotificationCard
          colorImage={colors.pink}
          image={images.workOutWoman}
          text="Hey, it's time for lunch"
          description="About 1 minutes ago"
        />
        <Margin margin={15} />
        <LineSeparator color={colors.gray3} />
        <Margin margin={15} />
        <NotificationCard
          colorImage={colors.blue}
          image={images.pancakeImage}
          text="Hey, it's time for lunch"
          description="About 1 minutes ago"
        />
        <Margin margin={15} />
        <LineSeparator color={colors.gray3} />
        <Margin margin={15} />
        <NotificationCard
          colorImage={colors.blue}
          image={images.workOutMan}
          text="Hey, it's time for lunch"
          description="About 1 minutes ago"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: responsiveHeight(40),
  },
});
