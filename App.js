import React from 'react';
import { StyleSheet } from 'react-native';
import RoootNavigator from "./src/navigations/RootNavigator";


const App = () => {
  return (
    <RoootNavigator />
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
