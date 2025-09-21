import { View, Text, Image, StyleSheet } from 'react-native';
import { Input } from '../shared/input/Input';
import CustomLink from '../shared/customLink/CusomLink';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Fonts, Gaps } from '../shared/tokens';

export default function UnmatchedCustom() {
    return <SafeAreaView style={styles.container}>
        <View style={styles.content}>
            <Image style={styles.image} source={require('../assets/images/unmatched.png')}/>
            <Text style={styles.text}>Ooops...Something went wrong. Try going back to the main page.</Text>
            <CustomLink href={'/'} text='Go back to the main page' />
        </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        padding: 55,
    },
    content: {
        alignItems: 'center',
        gap: Gaps.g50,
    },
    image: {
        width: 204,
        height: 282,
    },
    text: {
        color: Colors.white,
        fontSize: Fonts.f18,
        fontFamily: Fonts.regular,
        textAlign: 'center',
    }
});