import { TextInput, TextInputProps, StyleSheet } from "react-native";
import { Colors, Radius } from "../tokens";

export function Input(props: TextInputProps) {
    return <TextInput style={styles.input} {...props} placeholderTextColor={Colors.grey}/>
};

const styles = StyleSheet.create({
    input: {
        backgroundColor: Colors.violetDark,
        height: 58,
        paddingHorizontal: 24,
        borderRadius: Radius.r10,
        fontSize: 16,
    },
});