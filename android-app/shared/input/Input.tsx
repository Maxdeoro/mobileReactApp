import { TextInput, TextInputProps, StyleSheet } from "react-native";
// import styles from './Input.css';

export function Input(props: TextInputProps) {
    return <TextInput style={styles.input} {...props}/>
};

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#2E2D3D',
        color: '#aea4a4ff',
        height: 58,
        paddingHorizontal: 24,
        borderRadius: 8,
        fontSize: 16,
    },
});