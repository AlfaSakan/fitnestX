import moment from 'moment';
import React, { useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../assets/colors';
import { ArrowLeft2Icon, ArrowRight2Icon } from '../../assets/Images/svg';
import { fontFamily, fontSize, lineHeight } from '../../assets/Typography';
import Margin from '../../components/atoms/Margin/Margin';
import TypographyRegular from '../../components/atoms/Typography/TypographyRegular';
import { responsiveHeight, responsiveWidth } from '../../utils/functions/responsiveDimension';

const getMonthAndYear = (date: Date) => {
  return moment(date).format('MMMM YYYY');
};

const months = [0, 2, 4, 6, 7, 9, 11];

const daysInMonth = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
  28, 29, 30, 31,
];

const { width } = Dimensions.get('window');

interface Props {
  onPress: (value: Date) => void;
  selectedDate: Date;
  isTitle?: boolean;
}

const Calendar: React.FC<Props> = ({ selectedDate = new Date(), onPress, isTitle = true }) => {
  const [date, setDate] = useState(new Date());

  const updateState = (date: Date) => {
    const newMonth = date.getMonth();
    const newYear = date.getFullYear();
    setDate(new Date(newYear, newMonth));
  };

  const onPressArrowLeft = (date: Date) => {
    date.setMonth(date.getMonth() - 1);
    updateState(date);
  };

  const onPressArrowRight = (date: Date) => {
    date.setMonth(date.getMonth() + 1);
    updateState(date);
  };

  const index = selectedDate.getDate() - 1;
  const offsetX = index === 0 ? 0 : 75 * index - 100;

  return (
    <View style={styles.container}>
      {isTitle && (
        <View style={styles.headerCalendar}>
          <TouchableOpacity onPress={() => onPressArrowLeft(date)}>
            <ArrowLeft2Icon />
          </TouchableOpacity>
          <Text>{`${getMonthAndYear(date)}`}</Text>
          <TouchableOpacity onPress={() => onPressArrowRight(date)}>
            <ArrowRight2Icon />
          </TouchableOpacity>
        </View>
      )}
      <View style={{ width }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentOffset={{ x: offsetX, y: 0 }}
        >
          <View style={{ flexDirection: 'row', flex: 1, paddingLeft: 30 }}>
            {daysInMonth.map((dayInMonth, index) => {
              const eachDate = new Date(date);
              eachDate.setDate(dayInMonth);
              const displayDay = moment(eachDate).format('ddd');

              const monthDate = date.getMonth();
              const yearDate = date.getFullYear();

              const isSelectedDate =
                selectedDate.getDate() === eachDate.getDate() &&
                selectedDate.getMonth() === eachDate.getMonth() &&
                selectedDate.getFullYear() === eachDate.getFullYear();

              const component = (
                <TouchableOpacity key={index} onPress={() => onPress(eachDate)}>
                  <LinearGradient
                    style={styles.dateCalendar}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={isSelectedDate ? colors.blueLinear : [colors.gray4, colors.gray4]}
                  >
                    <TypographyRegular
                      text={`${displayDay}`}
                      fontSize={fontSize.smallText}
                      lineHeight={lineHeight.smallText}
                    />
                    <Margin margin={10} />
                    <TypographyRegular
                      text={`${dayInMonth}`}
                      fontFamily={fontFamily.medium}
                      fontSize={fontSize.mediumText}
                      lineHeight={lineHeight.mediumText}
                    />
                  </LinearGradient>
                </TouchableOpacity>
              );

              if (months.includes(monthDate)) return component;

              if (monthDate === 1) {
                if (dayInMonth >= 29) {
                  if (yearDate % 4 === 0 && !(dayInMonth > 29)) {
                    if (yearDate % 100 === 0 && !(yearDate % 400 === 0)) {
                      return;
                    }
                    return component;
                  }
                  return;
                }
                return component;
              }

              if (dayInMonth < 31) return component;

              return;
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  headerCalendar: {
    width: responsiveWidth(170),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: responsiveWidth(15),
  },
  dateCalendar: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: responsiveWidth(15),
    borderRadius: responsiveWidth(10),
    width: responsiveWidth(60),
    height: responsiveHeight(80),
  },
});
