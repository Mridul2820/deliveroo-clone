import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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
        contentContainerStyle={{paddingHorizontal: 4}}
        className="pt-4"></ScrollView>
    </View>
  );
};

export default FeaturedRow;
