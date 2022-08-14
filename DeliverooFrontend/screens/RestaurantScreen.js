import React, {useLayoutEffect} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';

import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import {urlFor} from '../sanity';
import DishRow from '../components/DishRow';
import BasketIcon from '../components/BasketIcon';
import {colors} from '../constants';
import {setRestuarant} from '../features/restuarantSlice';

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      shortDescription,
      dishes,
      latitude,
      longitude,
    },
  } = useRoute();

  useEffect(() => {
    dispatch(
      setRestuarant({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        shortDescription,
        dishes,
        latitude,
        longitude,
      }),
    );
  }, [dispatch]);

  return (
    <>
      <BasketIcon />
      <ScrollView className="text-black">
        <View className="relative">
          <Image
            source={{
              uri: urlFor(imgUrl).url(),
            }}
            className="w-full h-56 bg-gray-300 p-4"
          />
          <View className="absolute top-4 left-2">
            <TouchableOpacity
              className="bg-white rounded-full p-2"
              onPress={() => navigation.goBack()}>
              <AntDesign name="arrowleft" size={20} color={colors.primary} />
            </TouchableOpacity>
          </View>
        </View>

        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row gap-x-2 my-1">
              <View className="flex-row items-center gap-x-1">
                <MaterialIcons name="star" size={20} color={colors.primary} />
                <Text className="text-xs text-gray-500">
                  <Text className="text-green-500">{rating}</Text> · {genre}
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <Entypo
                  name="location-pin"
                  size={20}
                  color={colors.primary}
                  className="opacity-40"
                />
                <Text className="text-xs text-gray-500">
                  Nearby · {address}
                </Text>
              </View>
            </View>
            <Text className="text-xs text-gray-500 mt-2 pb-4">
              {shortDescription}
            </Text>
          </View>

          <TouchableOpacity className="flex-row gap-x-2 items-center border-y border-gray-300 p-4">
            <AntDesign
              name="questioncircleo"
              size={20}
              color={colors.primary}
            />
            <Text className="pl-1 flex-1 text-base font-bold">
              Have a food allergy?
            </Text>
            <Entypo name="chevron-right" size={20} color={colors.primary} />
          </TouchableOpacity>
        </View>

        <View className="pb-28">
          <Text className="px-4 pt-6 pb-4 font-bold text-xl">Menu</Text>

          {dishes.map((dish, index) => (
            <DishRow
              key={index}
              id={dish._id}
              name={dish.name}
              description={dish.short_description}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
