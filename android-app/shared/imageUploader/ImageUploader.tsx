import { Pressable, View, Text, StyleSheet, Alert } from 'react-native';
import { useMediaLibraryPermissions, MediaTypeOptions, PermissionStatus,
    launchImageLibraryAsync } from 'expo-image-picker';
import UploadIcon from '../../assets/icons/upload';
import { Gaps, Fonts, Colors, Radius } from '../tokens';
import FormData from 'form-data';
import axios, { AxiosError } from 'axios';
import { FILE_API } from '../api';
import { UploadResponse } from './imageUploader.interface';

interface ImageUploaderProps {
    onUpload: (uri: string) => void;
    onError: (error: string) => void;
};

export function ImageUploader({onUpload, onError}: ImageUploaderProps) {

    const upload = async () => {
        const isPermissionGranted = await verifyMediaPermissions();
        if(!isPermissionGranted) {
            onError('Insufficient permissions');
            return;
        }

        const asset = await pickImage();
        if(!asset) {
            onError('Image not selected');
            return;
        }

        const uploadedUrl = await uploadToServer(asset.uri, asset.fileName ?? '');
        if(!uploadedUrl) {
            onError('Failed to load image');
            return;
        }
        onUpload(uploadedUrl);
    };

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

        const result = await launchImageLibraryAsync({
            mediaTypes: MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.5,
        });

        if(!result.assets) {
            return null;
        }
        return result.assets[0];
    };

    const uploadToServer = async (url: string, fileName: string) => {
        const formData = new FormData();
        formData.append('files', {
            uri: url,
            fileName,
            type: 'image/jpeg',
        });
        try {
            const {data} = await axios.post<UploadResponse>(FILE_API.uploadImage, formData, {
                                headers: {
                                    'Content-Type': 'multipart/form-data'
                                }
            });
            return data.urls.original;
        } catch(error) {
            if(error instanceof AxiosError) {
                console.error(error);
            }
            return null;
        }
    };

    return (
        <Pressable onPress={upload}>
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