import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import sanityClient from '../sanity';
import CategoryCard from './CategoryCard';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient.fetch('*[_type == "category"]').then(data => {
      setCategories(data);
    });
  }, []);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingTop: 10,
      }}>
      {categories &&
        categories.map((category, id) => (
          <CategoryCard
            key={category._id + id}
            id={category._id}
            image={category.image}
            title={category.name}
          />
        ))}
    </ScrollView>
  );
};

export default Categories;
