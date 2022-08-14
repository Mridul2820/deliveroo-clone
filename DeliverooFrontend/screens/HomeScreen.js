import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityClient from '../sanity';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredRow, setFeaturedRow] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "featured"]{
          ...,
          restaurants[]->{
            ...,
            dishes[]->
          }
        }
    `,
      )
      .then(data => {
        setFeaturedRow(data);
      });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="flex-row items-center pb-3 mx-4 space-x-2">
        <Image
          source={{
            uri: 'https://links.papareact.com/0fm',
          }}
          className="w-7 h-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="text-gray-400 font-bold text-xs">Deviver Now</Text>
          <Text className="font-bold text-xl text-black">
            Current Location{' '}
            <Entypo name="chevron-down" size={20} color="#00ccbb" />
          </Text>
        </View>
        <AntDesign name="user" size={28} color="#00ccbb" />
      </View>

      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row items-center space-x-2 flex-1 bg-gray-200 px-3 py-1">
          <AntDesign name="search1" size={28} color="#777" />
          <TextInput
            placeholder="Restaurants, Food"
            className="text-xl font-bold text-black flex-1"
            keyboardType="default"
          />
        </View>
        <SimpleLineIcons name="equalizer" size={28} color="#00ccbb" />
      </View>

      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{paddingBottom: 20}}>
        <Categories />

        {featuredRow.map(category => (
          <FeaturedRow
            id={category._id}
            key={category._id}
            title={category.name}
            description={category.short_description}
            restaurants={category.restaurants}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
