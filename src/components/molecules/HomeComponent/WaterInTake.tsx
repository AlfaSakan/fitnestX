import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { WaterInTakeDataInterface, waterInTakeDummy } from '../../../utils/functions/datadummies';
import { responsiveWidth } from '../../../utils/functions/responsiveDimension';

import { colors } from '../../../assets/colors';
import { fontFamily, fontSize, lineHeight } from '../../../assets/Typography';

import Margin from '../../atoms/Margin/Margin';
import TypographyGradient from '../../atoms/Typography/TypographyGradient';
import TypographyRegular from '../../atoms/Typography/TypographyRegular';
import LinearGradient from 'react-native-linear-gradient';
import { ActivitiesDocument } from '../../../screens/DashboardScreen/HomeScreen';
import moment from 'moment';

interface WaterInTakeInterface {
  data?: ActivitiesDocument[];
  target?: number;
}

const WaterInTake: React.FC<WaterInTakeInterface> = ({ data = [], target = 8 }) => {
  const amountLiter = data.reduce((totalLiter, liter) => {
    if (new Date(liter.time).getDate() !== new Date().getDate()) return totalLiter;

    return totalLiter + liter.waterInMiliLiter;
  }, 0);

  return (
    <View style={styles.container}>
      <View style={styles.waterParameter}>
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
        {data
          .sort((a, b) => a.time - b.time)
          .map((inTake, index) => {
            const date = new Date(inTake.time);
            if (date.getDate() !== new Date().getDate()) return;

            const time = moment(inTake.time).format('ha');

            if (index > 0) {
              const prevTime = moment(data[index - 1].time).format('ha');
              if (time === prevTime) return;
            }

            let waterInMiliLiter = inTake.waterInMiliLiter;

            for (let i = index + 1; i <= data.length - 1; i++) {
              let nextTime = moment(data[i].time).format('ha');
              if (nextTime !== time) break;
              waterInMiliLiter += data[i].waterInMiliLiter;
            }

            return (
              <View key={index} style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                <View
                  style={{ alignItems: 'center', justifyContent: 'space-between', paddingTop: 3 }}
                >
                  <View style={styles.dot} />
                  <View style={styles.line} />
                </View>
                <View style={{ marginLeft: 8 }}>
                  <TypographyRegular
                    text={`${time}`}
                    fontSize={fontSize.belowCaption}
                    lineHeight={lineHeight.belowCaption}
                  />
                  <TypographyGradient color={colors.purpleLinear} style={styles.inTakeText}>
                    {`${waterInMiliLiter}ml`}
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

export default memo(WaterInTake);
