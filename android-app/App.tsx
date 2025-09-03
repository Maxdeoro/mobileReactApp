import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import { Input } from './shared/input/Input';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require('./assets/logo.png')} style={styles.logo} resizeMode='contain'/>
        <View style={styles.form}>
          <Input placeholder='Email'/>
          <Input placeholder='Password'/>
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
    flex: 1,
    padding: 55,
    backgroundColor: '#16171D',
  },
  content: {
    alignItems: 'center',
    gap: 50,
  },
  form: {
    alignSelf: 'stretch',
    gap: 16,
  },
  recovery: {
    fontSize: 10,
    color: '#8edfe7ff',
  },
  logo: {
    width: 170,
    height: 30,
  },
});
