import { View, StyleSheet } from "react-native";
import { useSetAtom, useAtomValue } from "jotai";
import { courseAtom, loadCourseAtom } from "../../entities/course/model/couse.state";
import { useEffect } from "react";
import { CourseCard } from "../../entities/course/ui/courseCard/CourseCard";
import { Gaps } from "../../shared/tokens";

export default function MyCourses() {

    const {courses, isLoading, error} = useAtomValue(courseAtom);

    const loadCourse = useSetAtom(loadCourseAtom);

    useEffect(() => {
        loadCourse();
    }, []);

    return <View style={styles.wrapper}>
        {courses.length > 0 && courses.map((c) => <CourseCard {...c} key={c.id}/>)}
    </View>;
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'column',
        gap: Gaps.g20,
        padding: 20,
    },
});






