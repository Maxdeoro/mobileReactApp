import { Pressable, View, Text, Image, StyleSheet } from 'react-native';
import { useMediaLibraryPermissions, MediaTypeOptions, PermissionStatus,
    launchImageLibraryAsync } from 'expo-image-picker';
import UploadIcon from '../../assets/icons/upload';
import { Gaps, Fonts, Colors, Radius } from '../tokens';

interface ImageUploaderProps {
    onUpload: (uri: string) => void;
};

export function ImageUploader({onUpload}: ImageUploaderProps) {

    const [libraryPermissions, requestLibraryPermission] = useMediaLibraryPermissions();

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

    const pickImage = async () => {
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
        onUpload(result.assets[0].uri);
    };

    return (
        <Pressable onPress={pickImage}>
            <View style={styles.container}>
                <UploadIcon />
                <Text style={styles.text}>Upload image</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: Gaps.g10,
        backgroundColor: Colors.violetDark,
        borderRadius: Radius.r10,
        paddingHorizontal: 20,
        paddingVertical: 17,
        alignItems: 'center',
    },
    text: {
        fontSize: Fonts.f16,
        fontFamily: Fonts.regular,
        color: Colors.white,
    }
});