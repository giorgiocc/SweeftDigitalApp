import React from 'react';
import {View, StyleSheet} from 'react-native';
import WeatherMainComp from './src/fetchCurrent';

const App = () => {
  return (
    <View style={styles.container}>
      <WeatherMainComp />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
export default App;
