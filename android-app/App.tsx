import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>ReactNativeApp</Text>
        <View style={styles.form}>
          <TextInput style={styles.input} placeholder='Email'/>
          <TextInput style={styles.input} placeholder='password'/>
          <Button title='Enter' />
        </View>
        <Text style={styles.recovery}>Password recovery</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    // alignItems: 'center',
    flex: 1,
    padding: 55,
  },
  content: {
    alignItems: 'center',
    gap: 50,
  },
  form: {
    alignSelf: 'stretch',
    gap: 16,
  },
  input: {
    backgroundColor: '#2E2D3D',
    color: '#FFF',
  },
  recovery: {
    fontSize: 10,
  }
});
