import { View, StyleSheet, FlatList } from "react-native";
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

    const renderCourse = ({item}: {item: StudentCourseDescription}) => {
        return (
            <View style={styles.item}>
                <CourseCard {...item}/>
            </View>
        );
    };

    return (
    <>
        {courses.length > 0 && <FlatList 
            data={courses}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderCourse}
        />}
    </>
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 20,
    }
});






