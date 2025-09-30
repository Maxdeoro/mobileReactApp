import { View, Text } from "react-native";
import { Colors } from "../../shared/tokens";
import { useAtom } from "jotai";
import { profileAtom } from "../../entities/user/model/user.state";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from "react";

const [profile] = useAtom(profileAtom);

useEffect(() => {
    AsyncStorage.setItem('demo', 'test').then(async () => {
        console.log(await AsyncStorage.getAllKeys());
        console.log(await AsyncStorage.getItem('demo'));
    });
}, []);

export default function MyCourses() {
    return <View>
        <Text>{profile.profile?.name}</Text>
    </View>;
};