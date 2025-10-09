// import { Link, LinkProps } from "expo-router";
import { Link } from 'expo-router';
import { StyleSheet, Text } from 'react-native';
import { Colors, Fonts } from "../tokens";

// export default function CustomLink({text, ...props}: LinkProps & {text: string}) {
//     return <Link style={styles.link} {...props}>
//         <Text>{text}</Text>
//     </Link>;
// };

export default function CustomLink({text, ...props}: React.ComponentProps<typeof Link> & {text: string}) {
    return <Link style={styles.link} {...props}>
        <Text>{text}</Text>
    </Link>;
};

const styles = StyleSheet.create({
    link: {
        fontSize: Fonts.f18,
        color: Colors.link,
        fontFamily: Fonts.regular,
    },
});