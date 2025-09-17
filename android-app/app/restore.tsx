import { Link, Stack } from "expo-router";
import { View, Text } from "react-native";

export default function Restore() {
    return <View>
        {/* <Stack.Screen options={{
            title: 'Restore password',
        }}/> */}
        <Link href={'/'}>
            <Text>LOGIN</Text>
        </Link>
    </View>;
};