import { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { ImageUploader } from '../../shared/imageUploader/ImageUploader';
import { Gaps } from '../../shared/tokens';
import { Avatar } from '../../entities/user/ui/avatar/Avatar';

export default function Profile() {

    const [image, setImage] = useState<string | null>(null);

    return (
        <View style={styles.container}>
            <Avatar image={image}/>
            <ImageUploader onUpload={setImage} onError={(e) => console.log(e)}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: Gaps.g20,
        alignItems: 'center',
        paddingHorizontal: 50,
        paddingVertical: 20,
    },
});