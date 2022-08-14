import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {urlFor} from '../sanity';

const ResturantCard = ({
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
}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow-md">
      <Image
        source={{
          uri: urlFor(imgUrl).width(200).height(200).url(),
        }}
        className="h-36 w-64 rounded-sm"
      />
      <View className=" pb-4 px-3">
        <Text className="text-lg font-bold pt-2">{title}</Text>
        <View className="flex-row items-center gap-x-1">
          <MaterialIcons name="star" size={20} color="#00ccbb" />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text> · {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <Entypo
            name="location-pin"
            size={20}
            color="#666"
            className="opacity-40"
          />
          <Text className="text-xs text-gray-500">Nearby · {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ResturantCard;
