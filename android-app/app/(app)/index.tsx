import { View, Text } from "react-native";
import { useAtom, useSetAtom } from "jotai";
import { profileAtom } from "../../entities/user/model/user.state";
import { useEffect } from "react";
import axios from "axios";
import { API } from "../../entities/auth/api/api";
import { AuthResponse } from "../../entities/auth/model/auth.interfaces";
import { loginAtom, logoutAtom } from "../../entities/auth/model/auth.state";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MyCourses() {
    // const [auth, login] = useAtom(loginAtom);
    const logout = useSetAtom(logoutAtom);

    // useEffect(() => {
    //     login({
    //         email: 'vasia@pupkin.ru',
    //         password: '12345678',
    //     });
    // }, []);

    useEffect(() => {
        logout();
        AsyncStorage.getItem('auth').then((data) => {
            console.log(data);
        });
    }, []);

    return <View>
        {/* <Text>{auth?.access_token}</Text> */}
        <Text>INDEX</Text>
    </View>;
};





