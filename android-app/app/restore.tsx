import { Link, Stack } from "expo-router";
import { View, Text } from "react-native";
import { Colors } from "../shared/tokens";

export default function Restore() {
    return <View>
        {/* <Stack.Screen options={{
            title: 'Restore password',
        }}/> */}
        <Link href={'/'}>
            <Text style={{color: Colors.white}}>RESTORE</Text>
        </Link>
    </View>;
};