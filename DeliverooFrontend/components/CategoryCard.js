import React from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';
import {urlFor} from '../sanity';

const CategoryCard = ({title, image}) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        source={{
          uri: urlFor(image).width(200).height(200).url(),
        }}
        className="w-20 h-20 rounded"
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
