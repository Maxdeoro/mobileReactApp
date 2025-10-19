import { DrawerContentComponentProps } from '@react-navigation/drawer/lib/typescript/src/types';
import { ReactNode, useState } from "react";
import { Pressable, PressableProps, View, Text, StyleSheet } from "react-native";
import { Gaps, Colors, Fonts } from '../../../../shared/tokens';


interface MenuItemProps {
    drawer: DrawerContentComponentProps,
    icon: ReactNode;
    text: string;
    path: string;
};

export function MenuItem({drawer, icon,text, path, ...props}: MenuItemProps & 
    PressableProps) {

    const [clicked, setClicked] = useState<boolean>(false);

    const isActive = drawer.state.routes[drawer.state.index].name === path;

    return (
    <Pressable {...props} 
        onPress={() => drawer.navigation.navigate(path)}
        onPressIn={() => setClicked(true)}
        onPressOut={() => setClicked(false)}>
            <View style={{...styles.menu, backgroundColor: clicked || isActive 
                ? Colors.violetDark : Colors.black, 
                borderColor: isActive ? Colors.primary : Colors.black}}>
                {icon}
                <Text style={styles.text}>{text}</Text>
            </View>
    </Pressable>
    );
};

const styles = StyleSheet.create({
    menu: {
        flexDirection: 'row',
        gap: Gaps.g20,
        paddingHorizontal: 24,
        paddingVertical: 16,
        alignItems: 'center',
        borderRightWidth: 5,
    },
    text: {
        color: Colors.white,
        fontSize: Fonts.f16,
        fontFamily: Fonts.regilar,
    },
});