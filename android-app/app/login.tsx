import { Colors, Gaps, Radius } from '../shared/tokens';
import { StyleSheet, View, Image } from 'react-native';
import { Input } from '../shared/input/Input';
import { Button } from '../shared/button/Button';
import { ErrorNotification } from '../shared/errorNotification/ErrorNotification';
import { useEffect, useState } from 'react';
import CustomLink from '../shared/customLink/CusomLink';
import { useAtom } from 'jotai';
import { loginAtom } from '../entities/auth/model/auth.state';
import { router } from 'expo-router';

export default function Login() {

  const [localError, setLocalError] = useState<string | undefined>();
  const [email, setEmail]= useState<string>();
  const [password, setPassword] = useState<string>();
  const [{access_token, isLoading, error}, login] = useAtom(loginAtom);

  const submit = () => {
    if(!email) {
      setLocalError('Enter email, please!');
      return;
    }
    if(!password) {
      setLocalError('Enter password, please!');
      return;
    }
    login({email, password});
  };

  useEffect(() => {
    if(error) {
      setLocalError(error);
    }
  }, [error]);

  useEffect(() => {
    if(access_token) {
      router.replace('/(app)');   // replace to main page
    }
  }, [access_token]);

  return (
    <View style={styles.container}>
      <ErrorNotification error={localError}/>
      <View style={styles.content}>
        <Image source={require('../assets/logo.png')} style={styles.logo} resizeMode='contain'/>
        <View style={styles.form}>
          <Input placeholder='Email' onChangeText={setEmail}/>
          <Input placeholder='Password' isPassword onChangeText={setPassword}/>
          <Button text='Enter' onPress={submit} isLoading={isLoading}/>
          {/* <Button text='Enter' onPress={submit} /> */}
        </View>
        <CustomLink href={'/restore'} text='Password recovery'/>
      </View>
    </View>
  );
};

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
