import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {QuestionCard} from '../components/QuestionCard';
import {WordCard} from '../components/WordCard';

const sentence = 'Love';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTxt}>CROSSWORD</Text>
      <View style={{flexDirection: 'row', marginTop:20, marginLeft:20}}>
        {sentence.split('').map((el, i) => (
          <WordCard key={i} value={el} />
        ))}
      </View>
      <View style={{position: 'absolute', bottom: 20, left: 0, right: 0}}>
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
