import { Image, StyleSheet, Text, View } from "react-native";
import { StudentCourseDescription } from "../../model/course.model";
import { Chip } from "../../../../shared/chip/Chip";
import { Button } from "../../../../shared/button/Button";
import { Colors, Radius, Fonts, Gaps } from "../../../../shared/tokens";

export function CourseCard({image,shortTitle,courseOnDirection}: StudentCourseDescription) {
    return (
        <View style={styles.card}>
            <Image  source={{uri: image}}
                    style={styles.image}
                    height={200}
            />
            <View style={styles.header}>
                <Text>{shortTitle}</Text>
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
    image: {
        borderRadius: Radius.r10,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    title: {
        fontSize: Fonts.f20,
        color: Colors.white,
        fontFamily: Fonts.semibold,
        marginBottom: 12,
    },
    chips: {
        flexDirection: 'row',
        gap: Gaps.g10,
    },
    header: {
        paddingHorizontal: 24,
        paddingVertical: 18,
    },
    footer: {
        backgroundColor: Colors.violetDark,
        paddingHorizontal: 24,
        paddingVertical: 20,
        borderBottomLeftRadius: Radius.r10,
        borderBottomRightRadius: Radius.r10,
    },
});