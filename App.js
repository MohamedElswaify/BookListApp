import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AddBookScreen from './screens/AddBookScreen';

function App() {
  
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Book list' }} />
        <Stack.Screen name="AddBook" component={AddBookScreen} options={{ title: 'Add new' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
