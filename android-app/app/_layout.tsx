import { Stack, Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Colors } from "../shared/tokens";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";

export default function  RootLayout() {

    const insets = useSafeAreaInsets();

    return <SafeAreaProvider>
        <StatusBar style='light' />
        <Stack screenOptions={{
            statusBarBackgroundColor: Colors.black,
            contentStyle: {
                backgroundColor: Colors.black,
                paddingTop: insets.top,
            },
            headerShown: false,
        }}>
            <Stack.Screen name='index' />
            <Stack.Screen name='restore'
                        options={{
                            presentation: 'modal',
                        }} />
        </Stack>;
    </SafeAreaProvider>;
};