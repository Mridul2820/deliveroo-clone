import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingTop: 10,
      }}>
      <CategoryCard title="Home" imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard title="Home" imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard title="Home" imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard title="Home" imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard title="Home" imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard title="Home" imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard title="Home" imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard
        title="Experiences"
        imgUrl="https://links.papareact.com/gn7"
      />
      <CategoryCard
        title="Restaurants"
        imgUrl="https://links.papareact.com/gn7"
      />
    </ScrollView>
  );
};

export default Categories;
