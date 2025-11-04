import { View, Text } from "react-native";
import { Button } from "../../shared/button/Button";
import { useSetAtom, useAtomValue } from "jotai";
import { logoutAtom } from "../../entities/auth/model/auth.state";
import { courseAtom, loadCourseAtom } from "../../entities/course/model/couse.state";
import { useEffect } from "react";

export default function MyCourses() {

    const {courses, isLoading, error} = useAtomValue(courseAtom);

    const loadCourse = useSetAtom(loadCourseAtom);

    useEffect(() => {
        loadCourse();
    }, []);

    return <View>
        <Text>INDEX</Text>
        {courses.length > 0 && courses.map((c) => <Text key={c.id}>{c.title}</Text>)}
        {/* <Button text="Logout" onPress={logout}/> */}
    </View>;
};






