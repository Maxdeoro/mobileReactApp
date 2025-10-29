import { useState, useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { ImageUploader } from '../../shared/imageUploader/ImageUploader';
import { Gaps } from '../../shared/tokens';
import { Avatar } from '../../entities/user/ui/avatar/Avatar';
import { updateProfileAtom } from '../../entities/user/model/user.state';
import { Button } from '../../shared/button/Button';
import { useAtom } from 'jotai';
import * as Sharing from 'expo-sharing';

export default function Profile() {

    const [image, setImage] = useState<string | null>(null);
    const [profile, updateProfile] = useAtom(updateProfileAtom);

    const shareProfile = async () => {
        const isSharingAvailable = await Sharing.isAvailableAsync();
        if(!isSharingAvailable) {
            return;
        }
        await Sharing.shareAsync('https://purpleschool.ru', {
            dialogTitle: 'Share Profile',
        });
    };

    const submitProfile = () => {
        if(!image) {
            return;
        }
        updateProfile({photo: image});
    };

    useEffect(() => {
        if(profile && profile.profile?.photo) {
            setImage(profile.profile?.photo);
        }
    }, [profile]);

    return (
        <View>
            <View style={styles.container}>
                <Avatar image={image}/>
                <ImageUploader onUpload={setImage} onError={(e) => console.log(e)}/>
            </View>
            <Button text="Save" onPress={submitProfile}/>
            <Button text='Share' onPress={shareProfile}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: Gaps.g20,
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingVertical: 20,
    },
});