import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';

import {colors} from '../constants';

const OrderPrepareScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Delivery');
    }, 4000);
  }, [navigation]);

  return (
    <SafeAreaView
      className="flex-1 justify-center items-center"
      style={{
        backgroundColor: colors.primary,
      }}>
      <Animatable.Image
        animation="slideInUp"
        duration={1500}
        source={require('../assets/giphy.gif')}
        className="w-96 h-96"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg text-center mb-8 text-white font-bold">
        Waiting for restaurant to accept your order
      </Animatable.Text>
      <Progress.Bar
        progress={0.3}
        width={200}
        indeterminate={true}
        color="white"
      />
    </SafeAreaView>
  );
};

export default OrderPrepareScreen;
