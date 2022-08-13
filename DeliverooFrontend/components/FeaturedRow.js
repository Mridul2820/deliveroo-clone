import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ResturantCard from './ResturantCard';

const FeaturedRow = ({id, title, description}) => {
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
        <ResturantCard
          id="1"
          imgUrl="https://links.papareact.com/28w"
          title="The Best Burgers"
          rating={4.5}
          genre="Burgers"
          address="1000 W 4th St, Los Angeles, CA 90017"
          shortDescription="Burgers, American, Fast Food"
          dishes={[]}
          long={-118.2437}
          lat={34.0522}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
