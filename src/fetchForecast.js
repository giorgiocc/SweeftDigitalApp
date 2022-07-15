async function fetchForecast(id) {
  const response = await fetch(
    'https://api.openweathermap.org/data/2.5/forecast?appid=55036f7dce8272db064eff9f62d508be&units=metric&id=' +
      id,
  );
  const myData = await response.json();

  let filterTime = myData.list[0].dt_txt.split(' ')[1];

  let result = myData.list.filter(data => {
    return data.dt_txt.includes(filterTime);
  });
  console.log(result);

  return result;
}

export default fetchForecast;
