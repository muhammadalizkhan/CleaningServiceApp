import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { verifyCode } from '../../Services/AuthService'; 

const Verification = ({ route, navigation }: any) => {
  const [code, setCode] = useState('');
  const { email } = route.params;

  const handleVerification = async () => {
    try {
      await verifyCode(email, code); 
      navigation.navigate('Home');
    } catch (error) {
      console.error('Verification failed:', error);
      alert('Verification failed. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Verification Code</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Code"
        value={code}
        onChangeText={setCode}
        keyboardType="numeric"
      />
      <Button title="Verify" onPress={handleVerification} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
});

export default Verification;
function alert(arg0: string) {
    throw new Error('Function not implemented.');
}

