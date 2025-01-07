// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '@react-navigation/elements';

const HomeScreen = ({navigation, route}) => {
  const [count, setCount] = React.useState(0);
  // Use an effect to monitor the update to params
  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
      alert('New post: ' + route.params?.post);
    }
  }, [route.params?.post]);

  React.useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount((c) => c + 1)}>Update count</Button>
      ),
    });
  }, [navigation]);

  const goto = () => {
    // 传递参数
    navigation.navigate('Details', {
      itemId: 42,
      otherParam: 'anything you want here',
    });
  }
  return (
    <View style={styles.container}>
      <Text>Count: {count}</Text>
      <Text style={styles.text} onPress={goto}>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate('Details', {
          itemId: 86,
          otherParam: 'anything you want her2e',
        })}
      >Go to Details
      </Button>
      <Button
        onPress={() => navigation.navigate('Profile', {name: '111'})}
      >Go to Profile
      </Button>
      <Button
        onPress={() => navigation.navigate('MyTab', {screen: 'Feed'})}
      >Go to HomeTab
      </Button>
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
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

export default HomeScreen;
