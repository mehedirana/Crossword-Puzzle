import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {LeftArrow} from '../assets/svg/LeftArrow';
import {RightArrow} from '../assets/svg/RightArrow';

export const QuestionCard = ({quesNum = 3}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTxt}>Topic : Self-Confidence</Text>
      <View style={styles.placeHolder} />
      <Text style={styles.quesTxt}>Quesion {quesNum}</Text>
      <View style={styles.sentenceCard}>
        <TouchableOpacity style={styles.buttonCard}>
          <LeftArrow />
        </TouchableOpacity>
        <Text numberOfLines={2} style={styles.sentenceTxt}>
          We should always think _______ about ourselves
        </Text>
        <TouchableOpacity style={styles.buttonCard}>
          <RightArrow />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 10,
    borderRadius: 9,
  },
  headerTxt: {
    marginTop: 15,
    textAlign: 'center',
    color: '#e25b30',
    fontSize: 15,
    fontWeight: '600',
  },
  placeHolder: {
    borderBottomWidth: 1,
    marginTop: 15,
    borderColor: '#e5e5e5',
  },
  quesTxt: {
    marginTop: 15,
    textAlign: 'center',
    color: '#7f7f7f',
    fontWeight: '600',
  },
  sentenceCard: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  sentenceTxt: {
    flex: 1,
    marginHorizontal: 10,
    color: 'black',
    fontWeight: '500',
  },
  buttonCard: {
    backgroundColor: '#e25b30',
    borderRadius: 9,
    justifyContent: 'center',
  },
});
