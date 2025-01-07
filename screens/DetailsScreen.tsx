// screens/DetailsScreen.js
import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import {
  useNavigation,
} from '@react-navigation/native';
import { Button } from '@react-navigation/elements';

const DetailsScreen = ({ route }) => {
  const [postText, setPostText] = React.useState('');
  const navigation = useNavigation();
  const { itemId = 1, otherParam = 3 } = route.params;

  function setParams() {
    navigation.setParams({
      itemId: Math.floor(Math.random() * 100)
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Details Screen</Text>
      <Text>Item ID: {itemId}</Text>
      <Text>Other Param: {otherParam}</Text>
      <Button onPress={() => navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100)
            })}>
        Go to Details... again
      </Button>
      <Button onPress={setParams}>
        setParams
      </Button>
      <Button onPress={() => navigation.popTo('Home')}>Go to Home</Button>
      <Button onPress={() => navigation.popToTop()}>
        Go back to first screen in stack
      </Button>
      <Button onPress={() => navigation.goBack()}>Go back</Button>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        onPress={() => {
          // Pass params back to home screen
          navigation.popTo('Home', { post: postText });
        }}
      >
        Done
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
  },
});

export default DetailsScreen;
