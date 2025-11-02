import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { Pressable, PressableProps, StyleSheet, View } from "react-native";
import CloseIcon from "../../../../assets/icons/close";
import { DrawerNavigationHelpers } from "@react-navigation/drawer/lib/typescript/src/types";
import MenuIcon from "../../../../assets/icons/menu";

export function CloseDrawer(navigation: DrawerNavigationHelpers) {
    return (
        <Pressable onPress={() => navigation.closeDrawer()} >
            <View style={styles.button}>
                <MenuIcon />
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 20,
        right: 20,
    }
});