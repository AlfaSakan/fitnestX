import React from 'react';
import { StyleSheet, View } from 'react-native';

import { WaterInTakeDataInterface, waterInTakeDummy } from '../../utils/datadummies';
import { responsiveWidth } from '../../utils/responsiveDimension';

import { colors } from '../../assets/colors';
import { fontFamily, fontSize, lineHeight } from '../../assets/Typography';

import Margin from '../Margin';
import TypographyGradient from '../Typography/TypographyGradient';
import TypographyRegular from '../Typography/TypographyRegular';
import LinearGradient from 'react-native-linear-gradient';

interface WaterInTakeInterface {
  data?: WaterInTakeDataInterface[];
  target?: number;
}

const WaterInTake: React.FC<WaterInTakeInterface> = ({ data = waterInTakeDummy, target = 8 }) => {
  const amountLiter = data.reduce((totalLiter, liter) => {
    return totalLiter + liter.amount;
  }, 0);
  return (
    <View style={styles.container}>
      <View style={styles.waterParameter}>
        {/* <View /> */}
        <LinearGradient colors={colors.blueLinear} style={{ flex: amountLiter / 1000 / target }} />
      </View>
      <View>
        <TypographyRegular
          text="Water Intake"
          fontSize={fontSize.smallText}
          fontFamily={fontFamily.medium}
          lineHeight={lineHeight.smallText}
        />
        <TypographyGradient color={colors.purpleLinear} style={styles.amountLiterText}>
          {`${amountLiter / 1000} Liters`}
        </TypographyGradient>
        <Margin margin={10} />
        <TypographyRegular
          text="Real time update"
          color={colors.gray1}
          fontSize={fontSize.caption}
          lineHeight={lineHeight.caption}
        />
        {data.map((inTake, index) => {
          return (
            <View key={index} style={{ flexDirection: 'row', flex: 1, alignItems: 'flex-start' }}>
              <View style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={styles.dot} />
                <View style={styles.line} />
              </View>
              <View style={{ marginLeft: 8 }}>
                <TypographyRegular
                  text={`${inTake.fromTime} - ${inTake.untilTime}`}
                  fontSize={fontSize.belowCaption}
                  lineHeight={lineHeight.belowCaption}
                />
                <TypographyGradient color={colors.purpleLinear} style={styles.inTakeText}>
                  {`${inTake.amount}ml`}
                </TypographyGradient>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    padding: 20,
    // justifyContent: 'space-between',
  },
  waterParameter: {
    backgroundColor: colors.gray4,
    height: '100%',
    width: responsiveWidth(20),
    borderRadius: responsiveWidth(10),
    marginRight: 10,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  amountLiterText: {
    fontSize: fontSize.mediumText,
    lineHeight: lineHeight.mediumText,
    fontFamily: fontFamily.semiBold,
  },
  inTakeText: {
    fontSize: fontSize.belowCaption,
    lineHeight: lineHeight.belowCaption,
    fontFamily: fontFamily.regular,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.pink,
    marginBottom: 5,
  },
  line: {
    borderStyle: 'dashed',
    borderWidth: 0.5,
    borderColor: colors.pink,
    backgroundColor: colors.pink,
    height: 22,
    width: 0.5,
  },
});

export default WaterInTake;
