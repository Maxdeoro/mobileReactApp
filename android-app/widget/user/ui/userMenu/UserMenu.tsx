import { View, StyleSheet, Text } from 'react-native';
import { User } from '../../../../entities/user/model/user.model';
import { Gaps, Fonts } from '../../../../shared/tokens';
import { Avatar } from '../../../../entities/user/ui/avatar/Avatar';

export function UserMenu({user}: {user: User | null}) {

    if(!user) {
        return;
    }

    return (
        <View style={styles.container}>
            <Avatar image={user.photo ?? null}/>
            <Text style={styles.name}>{user.name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        gap: Gaps.g8,
        marginTop: 30,
        marginBottom: 40,
    },
    name: {
        fontSize: Fonts.f16,
        fontFamily: Fonts.regular,
    },
});