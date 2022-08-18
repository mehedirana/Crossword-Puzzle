import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {QuestionCard} from '../components/QuestionCard';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTxt}>CROSSWORD</Text>
      <View style={{position:'absolute', bottom:20, left:0,right:0}}>
        <QuestionCard />
      </View>
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
    color: 'black',
  },
});
