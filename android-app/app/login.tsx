import { Colors, Gaps, Radius } from '../shared/tokens';
import { StyleSheet, View, Image, Dimensions, KeyboardAvoidingView, Platform } from 'react-native';
import { Input } from '../shared/input/Input';
import { Button } from '../shared/button/Button';
import { ErrorNotification } from '../shared/errorNotification/ErrorNotification';
import { useEffect, useState } from 'react';
import CustomLink from '../shared/customLink/CusomLink';
import { useAtom } from 'jotai';
import { loginAtom } from '../entities/auth/model/auth.state';
import { router } from 'expo-router';
import { useScreenOrientation } from '../shared/hooks';
import { Orientation } from 'expo-screen-orientation';

export default function Login() {

  const [localError, setLocalError] = useState<string | undefined>();
  const [email, setEmail]= useState<string>();
  const [password, setPassword] = useState<string>();
  const [{access_token, isLoading, error}, login] = useAtom(loginAtom);
  const orientation = useScreenOrientation();
  console.log(orientation);

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
      router.replace('/');   // replace to main page
    }
  }, [access_token]);

  return (
    <View style={styles.container}>
      <ErrorNotification error={localError}/>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
                            style={styles.content}>
        <Image source={require('../assets/logo.png')} style={styles.logo} resizeMode='contain'/>
        <View style={styles.form}>
          <View style={{...styles.inputs, 
            flexDirection: orientation === Orientation.PORTRAIT_UP ? 'column' : 'row'}}>
            <Input placeholder='Email' onChangeText={setEmail} 
              style={{width: orientation === Orientation.PORTRAIT_UP || 
                orientation === Orientation.PORTRAIT_DOWN ? 'auto' 
                : Dimensions.get('window').width / 2 - 16 - 48, 
              }}/>
            <Input placeholder='Password' isPassword onChangeText={setPassword} style={{
              width: orientation === Orientation.PORTRAIT_UP || 
              orientation === Orientation.PORTRAIT_DOWN ? 'auto' 
              : Dimensions.get('window').width / 2 - 16 - 48,
            }}/>
          </View>
          <Button text='Enter' onPress={submit} isLoading={isLoading}/>
          {/* <Button text='Enter' onPress={submit} /> */}
        </View>
        <CustomLink href={'/restore'} text='Password recovery'/>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 55,
    backgroundColor: Colors.black,
  },
  content: {
    alignItems: 'center',
    gap: Gaps.g50,
    maxWidth: 400,
    minWidth: '60%',
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
    // width: 170,
    width: Platform.select({ios: 170, android: 180, web: 200}),
    height: 30,
  },
  button: {
        height: 58,
        backgroundColor: Colors.primary,
        borderRadius: Radius.r10,
        color: Colors.grey,
  },
  inputs: {
    gap: Gaps.g16,
  },
  // input: {
  //   width: 'auto',
  // }
});
