import { NativeStackScreenProps } from '@react-navigation/native-stack';
import moment from 'moment';
import React, { useState } from 'react';
import { StyleSheet, Switch, TouchableOpacity, View } from 'react-native';
import { colors } from '../../assets/colors';
import {
  ArrowRight2Icon,
  BedStroke,
  ClockIcon,
  RepeatIcon,
  VibratePhone,
} from '../../assets/Images/svg';
import { captionTypography, fontFamily, smallTypography } from '../../assets/Typography';
import ContentContainer from '../../components/atoms/Container/ContentContainer';
import FlexRowContainer from '../../components/atoms/Container/FlexRowContainer';
import Margin from '../../components/atoms/Margin/Margin';
import TypographyRegular from '../../components/atoms/Typography/TypographyRegular';
import BaseContainerWithHeader from '../../components/organisms/BaseContainerWithHeader';
import { responsiveWidth } from '../../utils/functions/responsiveDimension';
import { SleepTrackerStackType } from '../../utils/types/navigation';

type Params = NativeStackScreenProps<SleepTrackerStackType, 'AddAlarm'>;

const dummyData = [
  {
    name: 'Bedtime',
    icon: <BedStroke />,
    value: moment(new Date()).format('hh:mm A'),
  },
  {
    name: 'Hours of sleep',
    icon: <ClockIcon />,
    value: '8hours 30minutes',
  },
  {
    name: 'Repeat',
    icon: <RepeatIcon />,
    value: 'Mon to Fri',
  },
];

const AddAlarm = ({ navigation }: Params) => {
  const [valueSwitch, setValueSwitch] = useState(false);

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <BaseContainerWithHeader title="Add Alarm" onPressBack={goBack} isButtonBottom buttonText="Add">
      <View style={styles.container}>
        {dummyData.map((data, index) => {
          return (
            <TouchableOpacity key={index}>
              <ContentContainer backgroundColor={colors.gray4} isShadow={false}>
                <FlexRowContainer>
                  {data.icon}
                  <View style={{ marginLeft: responsiveWidth(10), flex: 1 }}>
                    <FlexRowContainer>
                      <TypographyRegular
                        {...smallTypography}
                        color={colors.gray1}
                        text={data.name}
                      />
                      <TypographyRegular
                        {...captionTypography}
                        fontFamily={fontFamily.regular}
                        color={colors.gray2}
                        text={data.value}
                      />
                    </FlexRowContainer>
                  </View>
                  <ArrowRight2Icon />
                </FlexRowContainer>
              </ContentContainer>
              <Margin margin={10} />
            </TouchableOpacity>
          );
        })}

        <ContentContainer backgroundColor={colors.gray4} isShadow={false}>
          <FlexRowContainer>
            <View style={styles.displayFlex}>
              <VibratePhone />
              <View style={{ marginLeft: responsiveWidth(10) }}>
                <TypographyRegular
                  {...smallTypography}
                  color={colors.gray1}
                  text={'Vibrate when alarm sound'}
                />
              </View>
            </View>
            <View style={{ height: '100%', justifyContent: 'flex-end' }}>
              <Switch
                trackColor={{
                  false: '#767577',
                  true: colors.purpleLinear[0],
                }}
                // thumbColor={workout.isActive ? '#f5dd4b' : '#f4f3f4'}
                // ios_backgroundColor="#3e3e3e"
                onValueChange={setValueSwitch}
                value={valueSwitch}
              />
            </View>
          </FlexRowContainer>
        </ContentContainer>
      </View>
    </BaseContainerWithHeader>
  );
};

export default AddAlarm;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: responsiveWidth(30),
    backgroundColor: colors.white,
    flex: 1,
  },
  displayFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
