import { View, StyleSheet, FlatList, ActivityIndicator, RefreshControl } from "react-native";
import { useSetAtom, useAtomValue } from "jotai";
import { courseAtom, loadCourseAtom } from "../../entities/course/model/couse.state";
import { useEffect } from "react";
import { CourseCard } from "../../entities/course/ui/courseCard/CourseCard";
import { Gaps, Colors } from "../../shared/tokens";

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
        {isLoading && <ActivityIndicator style={styles.activity} size='large' color={Colors.primary}/>}
        {courses.length > 0 && ( 
        <FlatList 
            refreshControl={
            <RefreshControl refreshing={isLoading} 
                            onRefresh={loadCourse} 
                            tintColor={Colors.primary} 
                            titleColor={Colors.primary}
            />}
            data={courses}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderCourse}
        />)}
    </>
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 20,
    },
    activity: {
        marginTop: 30,
    },
});






