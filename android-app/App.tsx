import { Colors, Gaps, Radius } from './shared/tokens';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { Input } from './shared/input/Input';
import { Button } from './shared/button/Button';
// import EyeClosedIcon from './assets/icons/eye-closed';
// import EyeOpenedIcon from './assets/icons/eye-opened';

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require('./assets/logo.png')} style={styles.logo} resizeMode='contain'/>
        <View style={styles.form}>
          <Input placeholder='Email'/>
          <Input placeholder='Password' isPassword/>
          <Button text='Enter'/>
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
  button: {
        height: 58,
        backgroundColor: Colors.primary,
        borderRadius: Radius.r10,
        color: Colors.grey,
    },
});
