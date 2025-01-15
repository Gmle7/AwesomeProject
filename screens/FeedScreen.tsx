// screens/FeedScreen.js
import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Button } from '@react-navigation/elements';

let res = [{
  title: 'Title1'}]

function toAlert() {
  getMoviesFromApiAsync().then(data => {
    res = data
    console.log('res', res);
    Alert.alert(JSON.stringify(res[1]));
  });
}
function getMoviesFromApiAsync() {
  return fetch(
    'https://facebook.github.io/react-native/movies.json',
  )
    .then(response => response.json())
    .then(responseJson => {
      return responseJson.movies;
    })
    .catch(error => {
      console.error(error);
    });
}

const FeedScreen = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Button
        onPress={toAlert}
      >
        alert
      </Button>
      <Button
        onPress={() =>
          navigation.setOptions({ title: 'Updated!' })
        }
      >
        Update the title
      </Button>
      <Text>{JSON.parse(JSON.stringify(res[0])).title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default FeedScreen;
