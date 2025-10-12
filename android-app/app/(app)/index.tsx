import { View, Text } from "react-native";
import { Button } from "../../shared/button/Button";
import { useSetAtom } from "jotai";
import { logoutAtom } from "../../entities/auth/model/auth.state";

export default function MyCourses() {

    const logout = useSetAtom(logoutAtom);

    return <View>
        <Text>INDEX</Text>
        <Button text="Logout" onPress={logout}/>
    </View>;
};






