import { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
// import { launchCameraAsync, MediaTypeOptions, useCameraPermissions,
//     PermissionStatus, launchImageLibraryAsync } from 'expo-image-picker';
// import { Button } from '../../shared/button/Button';
import { ImageUploader } from '../../shared/imageUploader/ImageUploader';
import { UserMenu } from '../../entities/user/ui/userMenu/UserMenu';
import { Gaps } from '../../shared/tokens';

export default function Profile() {

    const [image, setImage] = useState<string | null>(null);
    // const [cameraPermissions, requestCameraPermission] = useCameraPermissions();
    // const [libraryPermissions, requestLibraryPermission] = useMediaLibraryPermissions();

    // const verifyCameraPermissions = async () => {
    //     if(cameraPermissions?.status === PermissionStatus.UNDETERMINED) {
    //         const response = await requestCameraPermission();
    //         return response.granted;
    //     }
    //     if(cameraPermissions?.status === PermissionStatus.DENIED) {
    //         Alert.alert('Insufficient permissions to access the camera');
    //         return false;
    //     }
    //     return true;
    // };

    // const verifyMediaPermissions = async () => {
    //     if(libraryPermissions?.status === PermissionStatus.UNDETERMINED) {
    //         const response = await requestLibraryPermission();
    //         return response.granted;
    //     }
    //     if(libraryPermissions?.status === PermissionStatus.DENIED) {
    //         Alert.alert('Insufficient permissions to access the gallery');
    //         return false;
    //     }
    //     return true;
    // };

    // const captureAvatar = async () => {
    //     const isPermissionGranted = await verifyCameraPermissions();

    //     if(!isPermissionGranted) {
    //         return;
    //     }

    //     const result = await launchCameraAsync({
    //         mediaTypes: MediaTypeOptions.Images,
    //         allowsEditing: true,
    //         aspect: [1, 1],
    //         quality: 0.5,
    //     });

    //     if(!result.assets?.length) {
    //         return;
    //     }
    //     setImage(result.assets[0].uri);
    // };

    // const pickAvatar = async () => {
    //     const isPermissionGranted = await verifyMediaPermissions();

    //     if(!isPermissionGranted) {
    //         return;
    //     }

    //     const result = await launchImageLibraryAsync({
    //         mediaTypes: MediaTypeOptions.Images,
    //         allowsEditing: true,
    //         aspect: [1, 1],
    //         quality: 0.5,
    //     });

    //     if(!result.assets?.length) {
    //         return;
    //     }
    //     console.log(result);
    //     setImage(result.assets[0].uri);
    // };

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