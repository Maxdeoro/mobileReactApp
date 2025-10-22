import { useState } from 'react';
import { View, Text } from 'react-native';
import { launchCameraAsync, MediaTypeOptions, useCameraPermissions,
    PermissionStatus } from 'expo-image-picker';
import { Button } from '../../shared/button/Button';

export default function Profile() {

    const [image, setImage] = useState(null);
    const [cameraPermissions, requestCameraPermission] = useCameraPermissions();

    const verifyCameraPermissions = async () => {
        if(cameraPermissions?.status === PermissionStatus.UNDERTERMINED) {
            const response = await requestCameraPermission();
            return response.granted;
        }
        if(cameraPermissions?.status === PermissionStatus.DENIED) {
            Alert.alert('Insufficient permissions to access the camera');
            return false;
        }
        return true;
    };

    const pickAvatar = async () => {
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
        console.log(result);
    };

    return (
        <View>
            <Text>Profile</Text>
            <Button text='Set photo'  onPress={pickAvatar}/>
        </View>
    );
};