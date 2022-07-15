import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';

const ForecastView = ({data}) => {
  return (
    <View style={styles.forecastContainer}>
      <ScrollView horizontal={true}>
        {data.map((item, index) => (
          <View key={index} style={styles.forecastView}>
            <Text>{new Date(item?.dt * 1000).toDateString()}</Text>
            <Text style={styles.text}>{item?.main?.temp}&#176;C</Text>
            <Text style={styles.text}>{item?.main?.humidity}%</Text>
            <Text style={styles.text}>{item?.main?.pressure}hPa</Text>
            <Text style={styles.text}>{item?.visibility}m</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'yellow',
  },
  forecastView: {
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'yellow',
    padding: 5,
  },
  forecastContainer: {
    // flex: 1,
    padding: 10,
    borderRadius: 8,
    borderWidth: 2,
    backgroundColor: 'black',
  },
});

export default ForecastView;
