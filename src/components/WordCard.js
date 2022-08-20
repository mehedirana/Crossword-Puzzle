import React from 'react';
import {View, Text, TextInput, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const WordCard = ({isEdit, value, setValue, isDisabled}) => {
  console.log(value);
  return (
    <View
      style={{
        backgroundColor: '#FFFFFF',
        width: width * 0.1,
        borderRadius: 9,
        marginRight:5
      }}>
      <TextInput
        style={{textAlign: 'center', fontSize:16, fontWeight:'600'}}
        value={value}
        onChangeText={txt => setValue(txt)}
        editable={isDisabled ? false : true}
      />
    </View>
  );
};
