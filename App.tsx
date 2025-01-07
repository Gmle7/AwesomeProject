/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import ProfileScreen from './screens/ProfileScreen';
import FeedScreen from './screens/FeedScreen';
import MessagesScreen from './screens/MessagesScreen';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  Alert,
  Button,
  Platform,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

const My = createNativeStackNavigator();

function MyTabs() {
  return (
    <My.Navigator>
      <My.Screen name="Feed" component={FeedScreen} />
      <My.Screen name="Messages" component={MessagesScreen} />
    </My.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {backgroundColor: 'tomato'},
        headerTintColor: '#ff6',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="MyTab"
        component={MyTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: props => <LogoTitle {...props} />,
        }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        initialParams={{itemId: -1}}
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="info"></Button>
          ),
          headerBackTitle: 'Custom Back',
          headerBackTitleStyle: {fontSize: 30},
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={({route}) => ({
          title: route.params.name,
        })}
      />
    </Stack.Navigator>
  );
}

function LogoTitle() {
  return (
    <Image style={{width: 50, height: 50}} source={require('./img/car.png')} />
  );
}

const RootTabs = createBottomTabNavigator();

function Root() {
  return (
    <RootTabs.Navigator screenOptions={{ headerShown: false }}>
      <RootTabs.Screen name="HomeTab" component={HomeStack} />
      <RootTabs.Screen name="MyTab" component={MyTabs} />
    </RootTabs.Navigator>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [text, setText] = useState('111');
  const [text2, setText2] = useState('112');
  const onPressButton = () => {
    Alert.alert('You tapped the button!');
  };
  const onLongPressButton = () => {
    Alert.alert('You long pressed  the button!');
  };
  const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64,
  };

  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
    // <SafeAreaView style={backgroundStyle}>
    //   <StatusBar
    //     barStyle={isDarkMode ? 'light-content' : 'dark-content'}
    //     backgroundColor={backgroundStyle.backgroundColor}
    //   />
    //   <View style={{height: 200, backgroundColor: "yellow", flexDirection: 'row', justifyContent: 'center'}}>
    //     <View style={{width: 100, backgroundColor: "red"}}></View>
    //     <View style={{width: 100, backgroundColor: "blue"}}></View>
    //   </View>
    //   <TextInput
    //     editable
    //     multiline
    //     numberOfLines={4}
    //     maxLength={20}
    //     style={{height: 40, borderWidth: 1, padding: 0, margin: 10, fontSize: 20}}
    //     placeholder="Type here to translate!"
    //     onChangeText={text => setText(text)}
    //     value={text}
    //   />
    //   <View
    //     style={{
    //       backgroundColor: text2,
    //       borderBottomColor: '#000000',
    //       borderBottomWidth: 1,
    //     }}>
    //     <TextInput
    //       editable
    //       multiline
    //       numberOfLines={4}
    //       maxLength={20}
    //       style={{height: 40, borderWidth: 1, padding: 0, margin: 10, fontSize: 20}}
    //       placeholder="Type here to translate!"
    //       onChangeText={text => setText2(text)}
    //       value={text2}
    //     />
    //   </View>
    //   <Text style={{padding: 10, fontSize: 42}}>
    //     {text.split(' ').map((word) => word && '🍕').join(' ')}
    //   </Text>
    //   <TouchableHighlight onPress={onPressButton} underlayColor="white">
    //     <View style={styles.button}>
    //       <Text style={styles.buttonText}>TouchableHighlight</Text>
    //     </View>
    //   </TouchableHighlight>
    //   <TouchableOpacity onPress={onPressButton}>
    //     <View style={styles.button}>
    //       <Text style={styles.buttonText}>TouchableOpacity</Text>
    //     </View>
    //   </TouchableOpacity>
    //   <TouchableNativeFeedback
    //     onPress={onPressButton}
    //     background={
    //       Platform.OS === 'android'
    //         ? TouchableNativeFeedback.SelectableBackground()
    //         : ''
    //     }>
    //     <View style={styles.button}>
    //       <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
    //     </View>
    //   </TouchableNativeFeedback>
    //   <TouchableWithoutFeedback onPress={onPressButton}>
    //     <View style={styles.button}>
    //       <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
    //     </View>
    //   </TouchableWithoutFeedback>
    //   <TouchableHighlight
    //     onPress={onPressButton}
    //     onLongPress={onLongPressButton}
    //     underlayColor="white">
    //     <View style={styles.button}>
    //       <Text style={styles.buttonText}>Touchable with Long Press</Text>
    //     </View>
    //   </TouchableHighlight>
    //   <Button onPress={onPressButton} title="点我！" />
    //   <ScrollView
    //     contentInsetAdjustmentBehavior="automatic"
    //     style={backgroundStyle}>
    //     <Header />
    //     <View
    //       style={{
    //         backgroundColor: isDarkMode ? Colors.black : Colors.white,
    //       }}>
    //       <Section title="Step One">
    //         Edit <Text style={styles.highlight}>App.tsx</Text> to change this
    //         screen and then come back to see your edits.
    //       </Section>
    //       <Section title="See Your Changes">
    //         <ReloadInstructions />
    //       </Section>
    //       <Section title="Debug">
    //         <DebugInstructions />
    //       </Section>
    //       <Section title="Learn More">
    //         Read the docs to discover what to do next:
    //       </Section>
    //       <LearnMoreLinks />
    //     </View>
    //     <Text style={{fontSize: 96}}>Scroll me plz</Text>
    //     <Image source={logo} />
    //     <Image source={logo} />
    //     <Image source={logo} />
    //     <Image source={logo} />
    //     <Image source={logo} />
    //     <Text style={{fontSize: 96}}>If you like</Text>
    //     <Image source={logo} />
    //     <Image source={logo} />
    //     <Image source={logo} />
    //     <Image source={logo} />
    //     <Image source={logo} />
    //     <Text style={{fontSize: 96}}>Scrolling down</Text>
    //     <Image source={logo} />
    //     <Image source={logo} />
    //     <Image source={logo} />
    //     <Image source={logo} />
    //     <Image source={logo} />
    //     <Text style={{fontSize: 96}}>What's the best</Text>
    //     <Image source={logo} />
    //     <Image source={logo} />
    //     <Image source={logo} />
    //     <Image source={logo} />
    //     <Image source={logo} />
    //     <Text style={{fontSize: 96}}>Framework around?</Text>
    //     <Image source={logo} />
    //     <Image source={logo} />
    //     <Image source={logo} />
    //     <Image source={logo} />
    //     <Image source={logo} />
    //     <Text style={{fontSize: 80}}>React Native</Text>
    //   </ScrollView>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    paddingTop: 60,
    alignItems: 'center',
  },
  button: {
    marginBottom: 30,
    width: '100%',
    height: 60,
    // flex: 1,
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
  buttonText: {
    flex: 1,
    textAlign: 'center',
    padding: 20,
    color: 'white',
  },
});

export default App;
