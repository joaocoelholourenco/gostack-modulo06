import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function App() {
  return (
    <>
      <View style={styles.container}>
        <Text>Hello, João</Text>
      </View>
    </>
  );
}

export default App;
