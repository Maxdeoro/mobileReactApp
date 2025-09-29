import { View, Text } from "react-native";
import { Colors } from "../../shared/tokens";
import { useAtom } from "jotai";
import { profileAtom } from "../../entities/user/model/user.state";

const [profile] = useAtom(profileAtom);

export default function MyCourses() {
    return <View>
        <Text>{profile.profile?.name}</Text>
        {/* <Text style={{color: Colors.white}}>MY COURSES</Text> */}
    </View>;
};