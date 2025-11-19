export const PREFIX = `${process.env.EXPO_PUBLIC_DOMAIN}/api-v2`;

export const API = {
    login: `${PREFIX}/auth/login`,
};

export const FILE_API = {
    uploadImage: `${PREFIX}/files/upload-image?folder=demo`,
};