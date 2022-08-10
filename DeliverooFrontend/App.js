import React from 'react';
import {Text, View} from 'react-native';
import {TailwindProvider} from 'tailwindcss-react-native';

const App = () => {
  return (
    <TailwindProvider>
      <View>
        <Text className="text-red-500 font-bold">Hey</Text>
      </View>
    </TailwindProvider>
  );
};

export default App;
