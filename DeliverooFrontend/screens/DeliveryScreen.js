import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import MapView, {Marker} from 'react-native-maps';

import * as Progress from 'react-native-progress';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {colors} from '../constants';
import {selectRestuarant} from '../features/restuarantSlice';

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestuarant);

  return (
    <View
      style={{
        backgroundColor: colors.primary,
      }}
      className="flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <AntDesign name="closecircle" size={25} color="#fff" />
          </TouchableOpacity>
          <Text className="text-lg text-white font-bold">Order help</Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md z-50 p-5 shadow-md">
          <View className="flex-row justify-between items-center">
            <View>
              <Text className="text-lg to-gray-400">Estimated Arrival</Text>
              <Text className="font-bold text-3xl mb-3">40-45 Minutes</Text>
              <Progress.Bar
                progress={0.3}
                width={200}
                indeterminate={true}
                color={colors.primary}
              />
            </View>

            <Image
              source={require('../assets/giphy.gif')}
              className="w-20 h-20"
            />
          </View>
          <Text className="mt-3 text-gray-500">
            Your order at {restaurant.name} is being prepared
          </Text>
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: parseFloat(restaurant.latitude),
          longitude: parseFloat(restaurant.longitude),
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
        mapType="standard"
        className="flex-1 -mt-10 z-0">
        <Marker
          coordinate={{
            latitude: parseFloat(restaurant.latitude),
            longitude: parseFloat(restaurant.longitude),
          }}
          title={restaurant.name}
          description={restaurant.description}
        />
      </MapView>
      <SafeAreaView className="bg-white flex-row items-center gap-x-4 h-24 px-5">
        <Image
          source={{
            uri: 'https://randomuser.me/api/portraits/men/22.jpg',
          }}
          className="h-12 w-12 bg-gray-300 rounded-full"
        />
        <View className="flex-1">
          <Text className="text-lg font-semibold">Rider Name</Text>
          <Text className="text-gray-400">Your Rider</Text>
        </View>
        <Text
          className="text-lg mr-5 font-bold"
          style={{
            color: colors.primary,
          }}>
          Call
        </Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
