import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {colors} from '../../assets/colors';
import {images} from '../../assets/images';
import {fontFamily, fontSize, lineHeight} from '../../assets/Typography';
import HeaderTitleBack from '../../components/Header/HeaderTitleBack';
import Margin from '../../components/Margin';
import ProfilePicture from '../../components/ProfilePicture/ProfilePicture';
import TypographyGradient from '../../components/Typography/TypographyGradient';
import TypographyRegular from '../../components/Typography/TypographyRegular';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../utils/responsiveDimension';

export default function ProfileScreen({navigation}) {
  return (
    <View style={styles.container}>
      <HeaderTitleBack title="Profile" />
      <Margin margin={35} />
      <ProfilePicture
        image={images.drinkImage}
        colorImage={colors.blue}
        text="Stefani Wong"
        description="Lose a Fat Program"
        textButton="Edit"
      />
      <Margin margin={15} />
      <View style={styles.displayFlex}>
        <View style={styles.profileUser}>
          <TypographyGradient color={colors.blueLinear}>
            <TypographyRegular
              text="180cm"
              fontFamily={fontFamily.medium}
              fontSize={fontSize.mediumText}
              lineHeight={lineHeight.mediumText}
            />
          </TypographyGradient>
          <Margin margin={5} />
          <TypographyRegular
            text="Height"
            fontFamily={fontFamily.regular}
            fontSize={fontSize.smallText}
            lineHeight={lineHeight.smallText}
          />
        </View>
        <View style={styles.profileUser}>
          <TypographyGradient color={colors.blueLinear}>
            <TypographyRegular
              text="65Kg"
              fontFamily={fontFamily.medium}
              fontSize={fontSize.mediumText}
              lineHeight={lineHeight.mediumText}
            />
          </TypographyGradient>
          <Margin margin={5} />
          <TypographyRegular
            text="Weight"
            fontFamily={fontFamily.regular}
            fontSize={fontSize.smallText}
            lineHeight={lineHeight.smallText}
          />
        </View>
        <View style={styles.profileUser}>
          <TypographyGradient color={colors.blueLinear}>
            <TypographyRegular
              text="22yo"
              fontFamily={fontFamily.medium}
              fontSize={fontSize.mediumText}
              lineHeight={lineHeight.mediumText}
            />
          </TypographyGradient>
          <Margin margin={5} />
          <TypographyRegular
            text="Age"
            fontFamily={fontFamily.regular}
            fontSize={fontSize.smallText}
            lineHeight={lineHeight.smallText}
          />
        </View>
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
        <View style={styles.displayFlex}>
          <View style={styles.displayFlex}>
            <Image
              style={[styles.accountImage, {marginRight: 10}]}
              source={images.profileGradient}
            />
            <TypographyRegular
              text="Personal Data"
              fontSize={fontSize.smallText}
              lineHeight={lineHeight.smallText}
              color={colors.gray1}
            />
          </View>
          <Image style={styles.accountImage} source={images.arrowRight} />
        </View>
        <Margin margin={10} />
        <View style={styles.displayFlex}>
          <View style={styles.displayFlex}>
            <Image
              style={[styles.accountImage, {marginRight: 10}]}
              source={images.achievementGradient}
            />
            <TypographyRegular
              text="Achievement"
              fontSize={fontSize.smallText}
              lineHeight={lineHeight.smallText}
              color={colors.gray1}
            />
          </View>
          <Image style={styles.accountImage} source={images.arrowRight} />
        </View>
        <Margin margin={10} />
        <View style={styles.displayFlex}>
          <View style={styles.displayFlex}>
            <Image
              style={[styles.accountImage, {marginRight: 10}]}
              source={images.activityHistoryGradient}
            />
            <TypographyRegular
              text="Activity History"
              fontSize={fontSize.smallText}
              lineHeight={lineHeight.smallText}
              color={colors.gray1}
            />
          </View>
          <Image style={styles.accountImage} source={images.arrowRight} />
        </View>
        <Margin margin={10} />
        <View style={styles.displayFlex}>
          <View style={styles.displayFlex}>
            <Image
              style={[styles.accountImage, {marginRight: 10}]}
              source={images.workoutProgressGradient}
            />
            <TypographyRegular
              text="Workout Progress"
              fontSize={fontSize.smallText}
              lineHeight={lineHeight.smallText}
              color={colors.gray1}
            />
          </View>
          <Image style={styles.accountImage} source={images.arrowRight} />
        </View>
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
        <View style={styles.displayFlex}>
          <View style={styles.displayFlex}>
            <Image
              style={[styles.accountImage, {marginRight: 10}]}
              source={images.notificationGradient}
            />
            <TypographyRegular
              text="Pop-up Notification"
              fontSize={fontSize.smallText}
              lineHeight={lineHeight.smallText}
              color={colors.gray1}
            />
          </View>
          <Image style={styles.accountImage} source={images.arrowRight} />
        </View>
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
        <View style={styles.displayFlex}>
          <View style={styles.displayFlex}>
            <Image
              style={[styles.accountImage, {marginRight: 10}]}
              source={images.mailGradient}
            />
            <TypographyRegular
              text="Contact Us"
              fontSize={fontSize.smallText}
              lineHeight={lineHeight.smallText}
              color={colors.gray1}
            />
          </View>
          <Image style={styles.accountImage} source={images.arrowRight} />
        </View>
        <Margin margin={10} />
        <View style={styles.displayFlex}>
          <View style={styles.displayFlex}>
            <Image
              style={[styles.accountImage, {marginRight: 10}]}
              source={images.privacyGradient}
            />
            <TypographyRegular
              text="Privacy Policy"
              fontSize={fontSize.smallText}
              lineHeight={lineHeight.smallText}
              color={colors.gray1}
            />
          </View>
          <Image style={styles.accountImage} source={images.arrowRight} />
        </View>
        <Margin margin={10} />
        <View style={styles.displayFlex}>
          <View style={styles.displayFlex}>
            <Image
              style={[styles.accountImage, {marginRight: 10}]}
              source={images.settingGradient}
            />
            <TypographyRegular
              text="Settings"
              fontSize={fontSize.smallText}
              lineHeight={lineHeight.smallText}
              color={colors.gray1}
            />
          </View>
          <Image style={styles.accountImage} source={images.arrowRight} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: responsiveHeight(40),
    paddingHorizontal: responsiveWidth(30),
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
});
