import { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { ImageUploader } from '../../shared/imageUploader/ImageUploader';
import { Gaps } from '../../shared/tokens';

export default function Profile() {

    const [image, setImage] = useState<string | null>(null);

    return (
        <View style={styles.container}>
            {image ? (
                <Image style={styles.image} source={{uri: image}}/> 
            )
                : (
                <Image source={require('../../assets/images/avatar.png')} />
            )}
            <ImageUploader onUpload={setImage} />
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
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
});