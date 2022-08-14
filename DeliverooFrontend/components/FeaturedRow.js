import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ResturantCard from './ResturantCard';

const FeaturedRow = ({restaurants, title, description}) => {
  return (
    <View>
      <View className="px-4 mt-4 flex-row items-center justify-between">
        <Text className="text-lg font-bold">{title}</Text>
        <MaterialIcons name="keyboard-arrow-right" size={30} />
      </View>

      <Text className="text-xs px-4 text-gray-500">{description}</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 16}}
        className="pt-4">
        {restaurants &&
          restaurants.map((restaurant, id) => (
            <ResturantCard
              key={restaurant._id + id}
              id={restaurant._id}
              image={restaurant.image}
              title={restaurant.name}
              rating={restaurant.rating}
              genre={restaurant.genre}
              address={restaurant.address}
              shortDescription={restaurant.short_description}
              dishes={restaurant.dishes}
              latitude={restaurant.latitude}
              longitude={restaurant.longitude}
            />
          ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
