import { View, StyleSheet, FlatList, ActivityIndicator, RefreshControl } from "react-native";
import { useSetAtom, useAtomValue } from "jotai";
import { courseAtom, loadCourseAtom } from "../../entities/course/model/couse.state";
import { useEffect } from "react";
import { CourseCard } from "../../widget/course/ui/courseCard/CourseCard";
import { Gaps, Colors } from "../../shared/tokens";
import { StudentCourseDescription } from "../../entities/course/model/course.model";
import { Button } from "../../shared/button/Button";
import * as Notification from 'expo-notifications';

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

    const allowsNotification = async () => {
        const settings = await Notification.getPermissionsAsync();
        return (
            settings.granted || settings.ios?.status == Notification.IosAutorizationStatus
            .PROVISIONAL;
        );
    };

    const requestPermissions = async () => {
        return Notification.getPermissionsAsync({
            ios: {
                allowAlert: true,
                allowBadge: true,
                allowSound: true,
            }
        });
    };

    const scheduleNotification = async () => {

        const granted = await allowsNotification();

        if(!granted) {
            await requestPermissions();
        }

        Notification.scheduleNotificationAsync({
            content: {
                title: "Don't foget about next lesson!",
                body: "Don't foget study your lessons every day.",
                data: {success: true},
            },
            trigger: {
                seconds: 10,
            }
        });
    };

    return (
    <>
        {isLoading && <ActivityIndicator style={styles.activity} size='large' color={Colors.primary}/>}
        <Button text='Remind me' onPress={scheduleNotification}/>
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






