import { Image, StyleSheet, Text, View } from "react-native";
import { StudentCourseDescription } from "../../model/course.model";
import { Chip } from "../../../../shared/chip/Chip";
import { Button } from "../../../../shared/button/Button";
import { Colors, Radius } from "../../../../shared/tokens";

export function CourseCard({image,title,courseOnDirection}: StudentCourseDescription) {
    return (
        <View style={styles.card}>
            <Image  source={{uri: image}}
                    style={styles.image}
                    height={200}
            />
            <View style={styles.header}>
                <Text>{title}</Text>
                <View style={styles.chips}>
                    {courseOnDirection.length > 0 && 
                     courseOnDirection.map((c) => <Chip text={c.direction.name}></Chip>)}
                </View>
            </View>
            <View style={styles.footer}>
                <Button text="Buy"/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'column',
        borderRadius: Radius.r10,
        backgroundColor: Colors.blackLight,
    },
    image: {},
    title: {},
    chips: {},
    header: {},
    footer: {},
});