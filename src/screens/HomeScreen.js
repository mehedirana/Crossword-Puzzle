import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTxt}>CROSSWORD</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(242,204,194,255)',
  },
  headerTxt: {
    marginTop: 22,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color:'black'
  },
});
