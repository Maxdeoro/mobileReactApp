import { View, Text } from "react-native";
import { useAtom } from "jotai";
import { profileAtom } from "../../entities/user/model/user.state";
import { useEffect } from "react";
import axios from "axios";
import { API } from "../../entities/auth/api/api";
import { AuthResponse } from "../../entities/auth/model/auth.interfaces";
import { loginAtom } from "../../entities/auth/model/auth.state";

// const login = async () => {
//     const {data} = await axios.post<AuthResponse>(API.login, { 
//         email: 'vasia@pupkin.ru',
//         password: '12345678',
//     });
//     console.log(data);
// };

// useEffect(() => {
//     login();
// }, []);

export default function MyCourses() {
    const [profile] = useAtom(profileAtom);
    const [auth, login] = useAtom(loginAtom);

    useEffect(() => {
        login({
            email: 'vasia@pupkin.ru',
            password: '12345678',
        });
    }, []);

    return <View>
        <Text>{auth?.access_token}</Text>
    </View>;
};





