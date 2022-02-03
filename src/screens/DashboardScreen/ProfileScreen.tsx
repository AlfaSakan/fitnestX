import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { colors } from '../../assets/colors';
import { images } from '../../assets/images';
import { ArrowRight2Icon } from '../../assets/Images/svg';
import { fontFamily, fontSize, lineHeight } from '../../assets/Typography';

import HeaderTitleBack from '../../components/atoms/Header/HeaderTitleBack';
import Margin from '../../components/atoms/Margin/Margin';
import ProfilePicture from '../../components/molecules/ProfilePicture/ProfilePicture';
import TypographyGradient from '../../components/atoms/Typography/TypographyGradient';
import TypographyRegular from '../../components/atoms/Typography/TypographyRegular';

import { HomeStackType, MainStackNavigation } from '../../utils/types/navigation';

import { responsiveHeight, responsiveWidth } from '../../utils/functions/responsiveDimension';

import { useAppSelector } from '../../config/redux/app/hooks';
import UserInfoComponent from '../../components/molecules/ProfileComponent/UserInfoComponent';
import { calculateAge } from '../../utils/functions/calculateAge';
import ProfileSectionComponent from '../../components/molecules/ProfileComponent/ProfileSectionComponent';
import NotificationSectionComponent from '../../components/molecules/ProfileComponent/NotificationSectionComponent';
import ButtonLargeGradient from '../../components/atoms/Button/ButtonLargeGradient';

type ProfileNavigationType = NativeStackScreenProps<HomeStackType, 'CongratulationScreen'>;
type MainNavigationType = NativeStackScreenProps<MainStackNavigation, 'BottomNavbarStackScreen'>;

export default function ProfileScreen({ navigation }: MainNavigationType) {
  const [displayAge, setDisplayAge] = useState('');
  const [notifEnable, setNotifEnable] = useState(false);

  const { goal, firstName, lastName, height, weight, email, gender, dateOfBirth } = useAppSelector(
    (state) => state.user
  );

  const onPressLogOut = async () => {
    await AsyncStorage.removeItem('user');
    navigation.navigate('SignupAndLoginStackScreen', { screen: 'LoginScreen' });
  };

  useEffect(() => {
    const resultCalculateAge = calculateAge(new Date(dateOfBirth));
    setDisplayAge(`${resultCalculateAge}`);
  }, []);

  return (
    <View style={styles.container}>
      <HeaderTitleBack title="Profile" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.paddingStyle}>
          <ProfilePicture
            image={images.drinkImage}
            colorImage={colors.blue}
            text={`${firstName} ${lastName}`}
            description={goal}
            textButton="Edit"
          />
          <Margin margin={15} />
          <View style={styles.displayFlex}>
            <UserInfoComponent value={height} label="Height" />
            <UserInfoComponent value={weight} label="Weight" />
            <UserInfoComponent value={`${displayAge}yo`} label="Age" />
          </View>

          <Margin margin={30} />
          <View style={styles.accountContainer}>
            <TypographyRegular
              text="Account"
              fontFamily={fontFamily.semiBold}
              fontSize={fontSize.largeText}
              lineHeight={lineHeight.largeText}
            />

            <Margin margin={15} />
            <ProfileSectionComponent label="Personal Data" imageSection={images.profileGradient} />

            <Margin margin={10} />
            <ProfileSectionComponent
              label="Achievement"
              imageSection={images.achievementGradient}
            />

            <Margin margin={10} />
            <ProfileSectionComponent
              label="Activity History"
              imageSection={images.activityHistoryGradient}
            />

            <Margin margin={10} />
            <ProfileSectionComponent
              label="Workout Progress"
              imageSection={images.workoutProgressGradient}
            />
          </View>

          <Margin margin={15} />
          <View style={styles.accountContainer}>
            <TypographyRegular
              text="Notification"
              fontFamily={fontFamily.semiBold}
              fontSize={fontSize.largeText}
              lineHeight={lineHeight.largeText}
            />

            <Margin margin={15} />
            <NotificationSectionComponent value={notifEnable} onValueChange={setNotifEnable} />
          </View>

          <Margin margin={15} />
          <View style={styles.accountContainer}>
            <TypographyRegular
              text="Other"
              fontFamily={fontFamily.semiBold}
              fontSize={fontSize.largeText}
              lineHeight={lineHeight.largeText}
            />

            <Margin margin={15} />
            <ProfileSectionComponent label="Contact Us" imageSection={images.mailGradient} />

            <Margin margin={10} />
            <ProfileSectionComponent label="Privacy Policy" imageSection={images.privacyGradient} />

            <Margin margin={10} />
            <ProfileSectionComponent label="Settings" imageSection={images.settingGradient} />
          </View>
          <Margin margin={15} />

          <ButtonLargeGradient
            buttonColor={colors.blueLinear}
            text="Logout"
            onPress={onPressLogOut}
            color={colors.white}
          />
          <Margin margin={15} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: responsiveHeight(40),
    backgroundColor: colors.white2,
  },
  displayFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileUser: {
    backgroundColor: colors.white,
    paddingHorizontal: responsiveWidth(20),
    paddingVertical: responsiveHeight(10),
    borderRadius: responsiveWidth(16),
    width: responsiveWidth(95),
    height: responsiveHeight(65),
    alignItems: 'center',
  },
  accountContainer: {
    padding: responsiveWidth(20),
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(16),
  },
  accountImage: {
    width: responsiveWidth(20),
    height: responsiveWidth(20),
  },
  paddingStyle: {
    paddingHorizontal: responsiveWidth(30),
  },
});
