import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import fetchForecast from './fetchForecast';

const CurrentView = ({setRes, item}) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.row}>
          <Text style={styles.title}>{item?.name}</Text>
          <Text style={styles.title}> -</Text>
          <View style={styles.button}>
            <Pressable
              onPress={() => {
                fetchForecast(item.id).then(result => setRes(result));
              }}
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'white' : 'white',
                },
                styles.wrapperCustom,
              ]}>
              {({pressed}) => (
                <Text style={styles.textBlack}>
                  {pressed ? 'Fetched!' : '7 Day forecast!'}
                </Text>
              )}
            </Pressable>
          </View>
        </View>
        <Text style={styles.text}>{item?.weather[0]?.description}</Text>
        <Text style={styles.text}>
          temp: {item.main.temp}&#176;C | feels like : {item.main.feels_like}
          &#176;C
        </Text>
        <Text style={styles.text}>
          min: {item.main.temp_min}&#176;C | max: {item.main.temp_max}&#176;C
        </Text>
        <Text style={styles.text}>pressure: {item.main.pressure}hPa</Text>
        <Text style={styles.text}>humidity: {item.main.humidity}%</Text>
        <Text style={styles.text}>visibility: {item.visibility}m</Text>
        <Text style={styles.text}>timezone: {item.timezone}</Text>
        <Text style={styles.text}>
          sunrise: {new Date(item.sys.sunrise * 1000).toLocaleTimeString()} |
          sunset {new Date(item.sys.sunset * 1000).toLocaleTimeString()}
        </Text>
        <Text style={styles.text}>
          updated: {new Date(item.dt * 1000).toLocaleTimeString()};
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: 'yellow',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
  textBlack: {
    fontSize: 20,
    color: 'black',
  },
  title: {
    fontSize: 36,
    textAlign: 'center',
    color: 'white',
  },
  button: {
    width: '40%',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
    borderWidth: 6,
  },
});
export default CurrentView;
