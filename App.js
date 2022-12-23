import React from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './screens/Home';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers/reducer';
import Advice from './screens/Advice';

const store = createStore(reducer);

const Stack = createStackNavigator();

const myOptions = {
  title: 'Home',
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: '#006aff',
  },
};
function App() {
  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={myOptions} />
        <Stack.Screen
          name="Advice"
          component={Advice}
          options={{ ...myOptions, title: 'Advice' }}
        />
      </Stack.Navigator>
    </View>
  );
}

export default () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
});
