// screens/FeedScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '@react-navigation/elements';

const FeedScreen = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Button
        onPress={() =>
          navigation.setOptions({ title: 'Updated!' })
        }
      >
        Update the title
      </Button>
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
