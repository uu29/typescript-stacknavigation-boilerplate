import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {
  HomeScreens,
  HomeStackParamList,
} from '../../navigators/HomeStackNavigators';
import {StackNavigationProp} from '@react-navigation/stack';

type DetailsScreenNavigationProps = StackNavigationProp<
  HomeStackParamList,
  HomeScreens.Details
>;

// ~/src/navigators/HomeStackNavigators/index.tsx 에서 2번 각 스크린 마다 필요한 파라미터 타입 정의해줄 때 Details 스크린에 필요한 props 로 지정해줬었음.
export type DetailsParams = {
  symbol: string; // DetailsScreen 에는 symbol 이라는 이름의 string 타입의 파라미터가 필요하다.
};

// DetailsScreen Props 의 타입들을 지정. (리액트에서 proptypes 지정하는 것 처럼)
interface DetailsScreenProps {
  route: {params: DetailsParams}; // 루트의 파라미터로 방금 지정해준 DetailsParams 타입이 온다.
  navigation: DetailsScreenNavigationProps;
}

const styles = StyleSheet.create({
  btnLoginContainer: {
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
  },
  txtSignupScreen: {
    fontSize: 30,
  },
  txtSignupScreenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtSymbol: {
    fontSize: 25,
    color: 'grey',
  },
});

const DetailsScreen: React.FunctionComponent<DetailsScreenProps> = (props) => {
  const {navigation, route} = props;
  const {params} = route;
  const {symbol} = params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.txtSignupScreenContainer}>
        <Text style={styles.txtSignupScreen}>DetailsScreen</Text>
        <Text style={styles.txtSymbol}>{symbol}</Text>
      </View>
    </SafeAreaView>
  );
};
export default DetailsScreen;
