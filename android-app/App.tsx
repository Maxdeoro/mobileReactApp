import { Colors, Gaps } from './shared/tokens';
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
    backgroundColor: Colors.black,
  },
  content: {
    alignItems: 'center',
    gap: Gaps.g50,
  },
  form: {
    alignSelf: 'stretch',
    gap: Gaps.g16,
  },
  recovery: {
    fontSize: 10,
    color: Colors.link,
  },
  logo: {
    width: 170,
    height: 30,
  },
});
