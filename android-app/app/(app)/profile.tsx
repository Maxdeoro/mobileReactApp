import { useState } from 'react';
import { View, Text, Alert, Image } from 'react-native';
import { launchCameraAsync, MediaTypeOptions, useCameraPermissions,
    PermissionStatus, launchImageLibraryAsync, useMediaLibraryPermissions } from 'expo-image-picker';
import { Button } from '../../shared/button/Button';

export default function Profile() {

    const [image, setImage] = useState<string | null>(null);
    const [cameraPermissions, requestCameraPermission] = useCameraPermissions();
    const [libraryPermissions, requestLibraryPermission] = useMediaLibraryPermissions();

    const verifyCameraPermissions = async () => {
        if(cameraPermissions?.status === PermissionStatus.UNDETERMINED) {
            const response = await requestCameraPermission();
            return response.granted;
        }
        if(cameraPermissions?.status === PermissionStatus.DENIED) {
            Alert.alert('Insufficient permissions to access the camera');
            return false;
        }
        return true;
    };

    const verifyMediaPermissions = async () => {
        if(libraryPermissions?.status === PermissionStatus.UNDETERMINED) {
            const response = await requestLibraryPermission();
            return response.granted;
        }
        if(libraryPermissions?.status === PermissionStatus.DENIED) {
            Alert.alert('Insufficient permissions to access the gallery');
            return false;
        }
        return true;
    };

    const captureAvatar = async () => {
        const isPermissionGranted = await verifyCameraPermissions();

        if(!isPermissionGranted) {
            return;
        }

        const result = await launchCameraAsync({
            mediaTypes: MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.5,
        });

        if(!result.assets?.length) {
            return;
        }
        setImage(result.assets[0].uri);
    };

    const pickAvatar = async () => {
        const isPermissionGranted = await verifyMediaPermissions();

        if(!isPermissionGranted) {
            return;
        }

        const result = await launchImageLibraryAsync({
            mediaTypes: MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.5,
        });

        if(!result.assets?.length) {
            return;
        }
        console.log(result);
        setImage(result.assets[0].uri);
    };

    return (
        <View>
            <Text>Profile</Text>
            <Button text='Take photo from camera'  onPress={captureAvatar}/>
            <Button text='Pick image from gallery' onPress={pickAvatar}/>
            {image && <Image source={{uri: image,
                width: 100,
                height: 100,
            }}/>}
        </View>
    );
};