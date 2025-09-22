import { Stack, SplashScreen } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Colors } from "../shared/tokens";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from 'expo-font';
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function  RootLayout() {

    const [loaded, error] = useFonts({
		FiraSans: require('../assets/fonts/FiraSans-Regular.ttf'),
		FiraSansSemiBold: require('../assets/fonts/FiraSans-SemiBold.ttf'),
	});

    useEffect(() => {
		if (error) {
			throw error;
		}
	}, [error]);

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

    return <SafeAreaProvider>
        <StatusBar style='light' />
        <Stack screenOptions={{
            statusBarBackgroundColor: Colors.black,
            contentStyle: {
                backgroundColor: Colors.black,
            },
            headerShown: false,
        }}>
            {/* <Stack.Screen name='index' /> */}
            <Stack.Screen name='login' />
            <Stack.Screen name='restore'
                        options={{
                            presentation: 'modal',
                        }} />
        </Stack>;
    </SafeAreaProvider>;
};