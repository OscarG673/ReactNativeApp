import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function WeightInput({ value, onChangeText }){
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Ingresa tu peso (en kg)"
        keyboardType="numeric"
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderWidth: 2,
    padding: 10,
  },
});


