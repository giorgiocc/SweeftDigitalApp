import React, {useEffect, useState} from 'react';
import {FlatList, Text, View, StyleSheet, Dimensions} from 'react-native';
import ForecastView from './forecastView';
import CurrentView from './currentView';

const WeatherMainComp = () => {
  const [isLoading] = useState(false);
  const [data, setData] = useState([]);
  const [idResult, setidResult] = useState([]);

  const citiesList = [611717, 613607, 615532];
  const apiUrl =
    'https://api.openweathermap.org/data/2.5/weather?&appid=55036f7dce8272db064eff9f62d508be&units=metric&id=';

  useEffect(() => {
    Promise.all(
      citiesList.map(city =>
        fetch(apiUrl + city).then(response => response.json()),
      ),
    )
      .then(currentData => {
        setData(currentData);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <View>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          <FlatList
            style={styles.container}
            data={data}
            renderItem={({item, index}) => (
              <>
                <CurrentView setRes={setidResult} item={item} />
              </>
            )}
          />
        </View>
      )}
      <ForecastView data={idResult} />
    </View>
  );
};
const HEIGHT = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    height: HEIGHT * 0.8,
    backgroundColor: 'black',
  },
});

export default WeatherMainComp;
