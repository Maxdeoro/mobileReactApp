import { DrawerContentComponentProps, DrawerContentScrollView } from "@react-navigation/drawer";
import { View, Text, StyleSheet, Image } from "react-native";
import { Colors } from "../../../../shared/tokens";
import CustomLink from "../../../../shared/customLink/CusomLink";
import { CloseDrawer } from "../../../../features/layout/ui/closeDrawer/CloseDrawer";
import { useSetAtom } from "jotai";
import { logoutAtom } from "../../../auth/model/auth.state";

export function CustomDrawer(props: DrawerContentComponentProps) {

    const logout = useSetAtom(logoutAtom);

    return (
        <DrawerContentScrollView {...props} contentContainerStyle={styles.scrollView}>
            <View style={styles.content}>
                <Text style={styles.text}>SOME TEXT</Text>
                <CloseDrawer {...props.navigation} />
            </View>
            <View style={styles.footer}>
                <Image source={require('../../../../assets/logo.png')} style={styles.logo} resizeMode='contain'/>
                <CustomLink text="Exit" href={'/login'} onPress={() => logout()}/>
            </View>
        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: Colors.black,
    },
    content: {
        flex: 1,
    },
    footer: {
        gap: 50,
        marginBottom: 40,
        alignItems: 'center'
    },
    text: {
        color: Colors.white,
    },
    logo: {
        width: 160,
        height: 30,
  },
});