import { Redirect, Stack } from "expo-router";
import { useAtomValue } from "jotai";
import { authAtom } from "../../entities/auth/model/auth.state";
import { Drawer } from 'expo-router/drawer';
import { Colors, Fonts } from "../../shared/tokens";
import { MenuButton } from "../../features/layout/ui/menuButton/MenuButton";
import { CustomDrawer } from "../../entities/layout/ui/customDrawer/CustomDrawer";

export default function  AppLayout() {

    const {access_token} = useAtomValue(authAtom);

    // if(!access_token) {
    //     return <Redirect href='/login'/>
    // }

    return <Drawer
      drawerContent={(props) => <CustomDrawer {...props}/>} 
      screenOptions={({navigation}) => ({
        headerStyle: {
            backgroundColor: Colors.blackLight,
            shadowColor: Colors.blackLight,
            shadowOpacity: 0,
        },
        headerLeft: () => {
            return <MenuButton navigation={navigation}/>;
        },
        headerTitleStyle: {
            color: Colors.white,
            fontFamily: Fonts.regular,
            fontSize: Fonts.f20,
        },
        headerTitleAlign: 'center',
        sceneContainerStyle: {
            backgroundColor: Colors.black,
        },
        drawerContentStyle: {
            backgroundColor: Colors.black,

        },
    })}>
            <Drawer.Screen name='index' options={{
                title: 'My courses',
            }}/>
        </Drawer>;
};