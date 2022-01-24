import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [val1, setVal1] = useState('');
  const [val2, setVal2] = useState('');
  const [result, setResult] = useState('');

  const plusButtonPressed = () => {
    setResult(Number(val1) + Number(val2));
  }

  const minusButtonPressed = () => {
    setResult(Number(val1) - Number(val2));
  }

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
        
      <TextInput
        style={{width: 200, borderColor:'gray', borderWidth:1 }}
        onChangeText={text => setVal1(text)}
        value={val1}
        keyboardType={'decimal-pad'}
      />
      <TextInput
        style={{width: 200, borderColor:'gray', borderWidth:1 }}
        onChangeText={text => setVal2(text)}
        value={val2}
        keyboardType={'decimal-pad'}
      />
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'space-between', margin:20}}>
        <Button onPress={plusButtonPressed} title="+"/>
        <Text>     </Text>
        <Button onPress={minusButtonPressed} title="-"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
