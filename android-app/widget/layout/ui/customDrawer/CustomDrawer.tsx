import { DrawerContentComponentProps, DrawerContentScrollView } from "@react-navigation/drawer";
import { View, StyleSheet, Image } from "react-native";
import { Colors } from "../../../../shared/tokens";
import CustomLink from "../../../../shared/customLink/CusomLink";
import { CloseDrawer } from "../../../../features/layout/ui/closeDrawer/CloseDrawer";
import { useAtom, useSetAtom } from "jotai";
import { logoutAtom } from "../../../../entities/auth/model/auth.state";
import { loadProfileAtom } from "../../../../entities/user/model/user.state";
import { useEffect } from "react";
import { UserMenu } from "../../../user/ui/userMenu/UserMenu";
import CoursesIcon from "../../../../assets/menu/courses";
import ProfileIcon from "../../../../assets/menu/profile";
import { MenuItem } from "../../../../entities/layout/ui/menuItem/MenuItem";

const MENU = [
    {text: 'Courses', icon: <CoursesIcon/>, path: 'index'},
    {text: 'Profile', icon: <ProfileIcon/>, path: 'profile'},
];

export function CustomDrawer(props: DrawerContentComponentProps) {

    const logout = useSetAtom(logoutAtom);
    const [profile, loadProfile] = useAtom(loadProfileAtom);

    useEffect(() => {
        loadProfile();
    }, []);

    return (
        <DrawerContentScrollView {...props} contentContainerStyle={styles.scrollView}>
            <View style={styles.content}>
                <CloseDrawer {...props.navigation} />
                <UserMenu user={profile.profile}/>
                {MENU.map((menu) => (
                    <MenuItem key={menu.path} {...menu} drawer={props}/>
                ))}
            </View>
            <View style={styles.footer}>
                <CustomLink text="Exit" href={'/login'} onPress={() => logout()}/>
                <Image source={require('../../../../assets/logo.png')} style={styles.logo} resizeMode='contain'/>
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