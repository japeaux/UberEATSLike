
import React from 'react';
import RootNavigation from './navigation';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

function App() {
  return <RootNavigation/>
}

export default App;